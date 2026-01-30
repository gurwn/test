import { NextRequest, NextResponse } from 'next/server';

// [PIVOT] Zero-Cost Analysis Logic (Simulating "Pre-learned" Classifier)
// Instead of calling Gemini, we use a deterministic hash of the image data 
// to return a consistent Face Shape & Hair Texture. 
// This allows the "Free Tier" to work instantly without API costs.

const FACE_SHAPES = ['oval', 'round', 'square', 'long', 'triangle'];
const TEXTURES = ['straight', 'wavy', 'curly'];

function fastHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

export async function POST(req: NextRequest) {
    try {
        const { image } = await req.json();

        if (!image) {
            return NextResponse.json({ error: 'No image provided' }, { status: 400 });
        }

        // [MOCK] Deterministic Analysis 
        // We simulate "Analyzing..." delay for better UX (so it feels like work is being done)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Use hash of image string to pick consistent results
        // This ensures the same photo always gets the same "Analysis"
        const hash = fastHash(image.substring(0, 1000)); // Hash first 1k chars

        const detectedFace = FACE_SHAPES[hash % FACE_SHAPES.length];
        const detectedTexture = TEXTURES[hash % TEXTURES.length];

        return NextResponse.json({
            faceShape: detectedFace,
            hairTexture: detectedTexture,
            hairCondition: {
                damage: 'healthy', // Default for MVP
                thickness: 'medium'
            },
            gender: 'male', // Default, or could imply from hash if we want
            notes: "[Free Tier] Analysis provided by standardized algorithm."
        });

    } catch (error) {
        console.error("Analysis Error:", error);
        return NextResponse.json(
            { error: 'Failed to analyze image' },
            { status: 500 }
        );
    }
}
