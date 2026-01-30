import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { prompt: userPrompt, description, styleName } = await req.json();
        const apiKey = process.env.GOOGLE_API_KEY;

        if (!apiKey) {
            return NextResponse.json({ error: 'API Key missing' }, { status: 500 });
        }


        // Advanced Prompt for "Natural Synthesis"
        const finalPrompt = `
      Professional close-up portrait of a person.
      Description of person: ${description || 'Natural skin texture, realistic face'}.
      Action: The person is wearing a "${styleName || 'modern'}" hairstyle.
      Hair details: Professional salon finish, natural hair texture, voluminous and clean.
      Lighting: Soft studio lighting, realistic shadows, 8k resolution, highly detailed.
      Format: Photorealistic, no distortions. 
    `.trim();

        const body = {
            instances: [{ prompt: finalPrompt }],
            parameters: {
                sampleCount: 1,
                aspectRatio: "1:1",
            }
        };

        // Try Imagen 4.0 first
        let url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${apiKey}`;

        let response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        // Fallback to Imagen 3.0 if 4.0 fails (e.g., 404 or 400)
        if (!response.ok) {
            console.warn(`Imagen 4.0 failed with status ${response.status}. Trying Imagen 3.0...`);
            url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${apiKey}`;
            response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
        }

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Google Imagen API Error:", errorText);
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
