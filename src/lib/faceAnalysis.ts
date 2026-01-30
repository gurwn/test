import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

export type FaceShape = 'oval' | 'round' | 'square' | 'long' | 'heart' | 'diamond' | 'triangle';

export class FaceAnalysisService {
    private static faceLandmarker: FaceLandmarker | null = null;

    static async initialize() {
        if (this.faceLandmarker) return;

        const filesetResolver = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
        );
        this.faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
            baseOptions: {
                modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
                delegate: "GPU"
            },
            outputFaceBlendshapes: true,
            runningMode: "IMAGE",
            numFaces: 1
        });
    }

    static reset() {
        if (this.faceLandmarker) {
            this.faceLandmarker.close();
            this.faceLandmarker = null;
        }
    }

    static async analyze(imageElement: HTMLImageElement): Promise<{ shape: FaceShape; confidence: number; scores: Record<FaceShape, number>; landmarks?: any[] }> {
        if (!this.faceLandmarker) {
            await this.initialize();
        }

        if (!this.faceLandmarker) {
            throw new Error("Failed to initialize Face Landmarker");
        }

        const results = this.faceLandmarker.detect(imageElement);

        if (!results.faceLandmarks || results.faceLandmarks.length === 0) {
            throw new Error("No face detected");
        }

        const landmarks = results.faceLandmarks[0];

        // DEBUG: Verify Input & Output
        console.log(`[FaceAnalysis] Input Image: ${imageElement.src.substring(0, 50)}... (${imageElement.naturalWidth}x${imageElement.naturalHeight})`);
        console.log(`[FaceAnalysis] Landmark[0] (Nose): x=${landmarks[1].x.toFixed(4)}, y=${landmarks[1].y.toFixed(4)}`);

        // Pass image dimensions for correct aspect ratio calculation
        const analysis = this.classifyFaceShape(landmarks, imageElement.naturalWidth, imageElement.naturalHeight);

        return {
            ...analysis,
            landmarks // Return landmarks for visualization
        };
    }

    private static classifyFaceShape(landmarks: any[], width: number, height: number): { shape: FaceShape; confidence: number; scores: Record<FaceShape, number> } {
        const getDist = (i1: number, i2: number) => {
            const p1 = landmarks[i1];
            const p2 = landmarks[i2];
            const dx = (p1.x - p2.x) * width;
            const dy = (p1.y - p2.y) * height;
            return Math.sqrt(dx * dx + dy * dy);
        };

        // 1. Calculate Core Metrics
        const faceHeight = getDist(10, 152); // Top of forehead to Chin
        const faceWidth = getDist(234, 454); // Cheekbone to Cheekbone
        const jawWidth = getDist(132, 361);  // Jaw corner to Jaw corner
        const foreheadWidth = getDist(103, 332); // Forehead width

        // 2. Ratios
        const ratio = faceHeight / faceWidth;
        const jawToCheek = jawWidth / faceWidth;
        const foreheadToCheek = foreheadWidth / faceWidth;

        // 3. New: Chin Angle (Landmarks: 132-152-361) - Jaw Corner -> Chin -> Jaw Corner
        // A wider angle means a flatter/squarer chin. A sharper angle means a pointed chin.
        const p132 = { x: landmarks[132].x * width, y: landmarks[132].y * height };
        const p152 = { x: landmarks[152].x * width, y: landmarks[152].y * height };
        const p361 = { x: landmarks[361].x * width, y: landmarks[361].y * height };

        // Vector 152->132
        const v1 = { x: p132.x - p152.x, y: p132.y - p152.y };
        // Vector 152->361
        const v2 = { x: p361.x - p152.x, y: p361.y - p152.y };

        // Dot product & Magnitude
        const dot = v1.x * v2.x + v1.y * v2.y;
        const mag1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
        const mag2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);

        const angleRad = Math.acos(dot / (mag1 * mag2));
        const chinAngle = angleRad * (180 / Math.PI);

        console.log("Advanced Analysis:", {
            ratio: ratio.toFixed(2),
            jawToCheek: jawToCheek.toFixed(2),
            chinAngle: chinAngle.toFixed(1)
        });

        // 4. Scoring System
        // We will assign points to each shape based on metrics.
        const scores: Record<FaceShape, number> = {
            oval: 0, round: 0, square: 0, long: 0, heart: 0, diamond: 0, triangle: 0
        };

        console.log(`[FaceAnalysis] Metrics: Ratio=${ratio.toFixed(2)}, Jaw/Cheek=${jawToCheek.toFixed(2)}, Forehead/Cheek=${foreheadToCheek.toFixed(2)}, ChinAngle=${chinAngle.toFixed(1)}`);

        // Metric A: Face Ratio (Length/Width)
        // Normal range is 1.35 ~ 1.48.
        if (ratio > 1.52) { scores.long += 4; }
        else if (ratio > 1.45) { scores.oval += 3; scores.long += 1; }
        else if (ratio > 1.38) { scores.oval += 3; scores.heart += 1; } // Ideal balance
        else if (ratio > 1.30) { scores.round += 2; scores.square += 1; scores.heart += 1; }
        else {
            // Very short face (< 1.30)
            scores.square += 3;
            scores.round += 3;
        }

        // Metric B: Jaw Width (Jaw/Cheek)
        if (jawToCheek > 0.94) { scores.square += 4; scores.round += 1; }
        else if (jawToCheek > 0.88) { scores.square += 2; scores.round += 2; }
        else if (jawToCheek > 0.82) { scores.oval += 2; scores.heart += 1; }
        else {
            // Narrow jaw (< 0.82)
            scores.heart += 3;
            scores.diamond += 3;
            scores.triangle += 3;
        }

        // Metric C: Chin Angle
        // Normal is 115-130. Lower = Sharper.
        if (chinAngle > 135) scores.square += 4; // Very Flat
        else if (chinAngle > 125) scores.round += 3; // Soft
        else if (chinAngle > 115) scores.oval += 2;
        else if (chinAngle > 100) { scores.heart += 3; scores.diamond += 1; } // Pointy
        else { scores.triangle += 4; scores.diamond += 3; } // Extremely Pointy (< 100)

        // Metric D: Forehead Width
        if (foreheadToCheek > 0.84) { scores.heart += 2; scores.oval += 1; }
        else if (foreheadToCheek < 0.72) { scores.triangle += 3; scores.diamond += 3; } // Very narrow forehead
        else { scores.round += 1; scores.square += 1; scores.oval += 1; }

        // Synergies / Corrections
        // 1. Square requires BOTH Jaw Width OR Flat Chin to be prominent
        if (scores.square > 0 && jawToCheek < 0.88 && chinAngle < 125) {
            scores.square -= 2; // Penalize "False Square" (Short point face)
        }

        // 2. Round vs Square differentiation
        // If Ratio is low (Short) but Chin is Sharp -> NOT Round/Square. It's likely Heart/Diamond.
        if (ratio < 1.35 && chinAngle < 115) {
            scores.round -= 2;
            scores.square -= 3;
            scores.heart += 2;
        }

        // Find winner
        let maxScore = -1;
        let winner: FaceShape = 'oval';

        for (const [shape, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                winner = shape as FaceShape;
            }
        }

        // Confidence calculation
        const total = Object.values(scores).reduce((a, b) => a + b, 0);

        // Convert to percentages
        const percentages: Record<FaceShape, number> = { ...scores };
        for (const key of Object.keys(percentages)) {
            percentages[key as FaceShape] = total === 0 ? 0 : Math.round((scores[key as FaceShape] / total) * 100);
        }

        const confidence = total === 0 ? 0.5 : (maxScore / total);

        return {
            shape: winner,
            confidence: Math.min(confidence + 0.3, 0.95),
            scores: percentages // Return the full breakdown
        };

    }
}
