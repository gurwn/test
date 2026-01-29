import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
    try {
        const { image } = await req.json(); // base64 string
        const apiKey = process.env.GOOGLE_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: 'API Key missing' }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

        // Prepare prompt for JSON output
        const prompt = `
      Analyze the face in this image for a professional hairstyle consultation.
      Return the result strictly in this JSON format:
      {
        "gender": "male" or "female",
        "faceShape": "oval" | "round" | "square" | "long" | "heart" | "diamond",
        "hairTexture": "straight" | "wavy" | "curly",
        "description": "A detailed 1-sentence description of the person's facial features, skin tone, and current hair for image generation context."
      }
      Do not include markdown formatting like \`\`\`json. Just the raw JSON string.
    `;

        // Remove header from base64 if present (data:image/jpeg;base64,...)
        const base64Data = image.split(',')[1] || image;

        const result = await model.generateContent([
            prompt,
            {
                inlineData: {
                    data: base64Data,
                    mimeType: "image/jpeg",
                },
            },
        ]);

        const response = await result.response;
        let text = response.text();

        // Clean code blocks if present
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();

        try {
            const json = JSON.parse(text);
            return NextResponse.json(json);
        } catch (e) {
            console.error("JSON Parse Error:", text);
            return NextResponse.json({ error: "Failed to parse analysis results" }, { status: 500 });
        }

    } catch (error) {
        console.error("Analysis Error:", error);
        return NextResponse.json({ error: 'Analysis Failed' }, { status: 500 });
    }
}
