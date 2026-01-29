import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { prompt: userPrompt, description, styleName } = await req.json();
        const apiKey = process.env.GOOGLE_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: 'API Key missing' }, { status: 500 });
        }


        // Note: Imagen 3 endpoint on AI Studio is 'models/imagen-3.0-generate-001'
        const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${apiKey}`;

        // Advanced Prompt for "Natural Synthesis"
        // We try to describe the person + the new hair + consistent lighting
        const finalPrompt = `
      Professional close-up portrait of a person.
      Description of person: ${description || 'Natural skin texture, realistic face'}.
      Action: The person is wearing a "${styleName || 'modern'}" hairstyle.
      Hair details: Professional salon finish, natural hair texture, voluminous and clean.
      Lighting: Soft studio lighting, realistic shadows, 8k resolution, highly detailed.
      Format: Photorealistic, no distortions. 
    `.trim();

        const body = {
            instances: [
                {
                    prompt: finalPrompt,
                }
            ],
            parameters: {
                sampleCount: 1,
                aspectRatio: "1:1",
                // requesting image/png if supported, otherwise default
            }
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Google API Error:", errorText);
            // Fallback or specific error handling
            return NextResponse.json({ error: 'Failed to generate image', details: errorText }, { status: response.status });
        }

        const data = await response.json();

        // Parse the response structure - usually it's predictions[0].bytesBase64Encoded or similar
        // For Imagen on Vertex/Gemini, structure might vary. 
        // Usually: { predictions: [ { bytesBase64Encoded: "..." } ] }
        const imageBase64 = data.predictions?.[0]?.bytesBase64Encoded;
        const mimeType = data.predictions?.[0]?.mimeType || 'image/png';

        if (!imageBase64) {
            return NextResponse.json({ error: 'No image data in response' }, { status: 500 });
        }

        return NextResponse.json({ image: `data:${mimeType};base64,${imageBase64}` });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
