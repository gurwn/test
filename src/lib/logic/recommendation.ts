import { HairStyle, UserProfile } from '../types';
import { HAIRSTYLES } from '../data/hairstyles';

export function getRecommendations(user: UserProfile): { recommended: HairStyle[], others: HairStyle[] } {
    // Filter by Gender
    const genderStyles = HAIRSTYLES.filter(s => s.gender === user.gender);

    // Calculate Scores
    const scored = genderStyles.map(style => {
        let score = 0;
        const matchReasons: string[] = [];
        const avoidReasons: string[] = [];

        // 1. Face Shape Match (High Impact)
        const faceWeight = style.faceShapeWeights[user.faceShape];
        if (faceWeight > 0) {
            score += 30;
            matchReasons.push('얼굴형 보완에 탁월해요');
        } else if (faceWeight < 0) {
            score -= 20;
            avoidReasons.push('얼굴형 단점이 부각될 수 있어요');
        }

        // 2. Hair Texture Match
        const textureWeight = style.textureWeights[user.hairCondition.texture];
        if (textureWeight > 0) {
            score += 15;
        } else if (textureWeight < 0) {
            score -= 10;
            avoidReasons.push('현재 모발 성질과 맞지 않아 관리가 힘들 수 있어요');
        }

        // 3. Vibe Preference (Tag matching)
        const userVibes = user.preferences.vibe;
        const matchedVibes = style.tags.filter(tag => userVibes.includes(tag));
        if (matchedVibes.length > 0) {
            score += 10 * matchedVibes.length;
            matchReasons.push('원하는 분위기와 딱 맞아요');
        }

        // 4. Maintenance Difficulty (Penalty only)
        if (user.preferences.stylingDifficulty === 'easy' && style.tags.includes('high-care')) {
            score -= 15;
            avoidReasons.push('손질이 꽤 필요한 스타일이에요');
        }

        // 5. Length Goal
        // Simple Mapping logic
        const currentLength = user.hairCondition.length;
        const targetLength = user.preferences.lengthGoal;

        // If user wants to "cut", short styles get bonus
        if (targetLength === 'cut' && style.tags.includes('short')) score += 10;
        // If user wants to "grow", long styles get bonus
        if (targetLength === 'grow' && style.tags.includes('long')) score += 10;
        // If user wants to "keep", match current length tags
        if (targetLength === 'keep' && style.tags.includes(currentLength)) score += 10;


        return { style, score, matchReasons, avoidReasons };
    });

    // Sort by Score
    scored.sort((a, b) => b.score - a.score);

    return {
        recommended: scored.slice(0, 5).map(s => s.style),
        others: scored.slice(5).map(s => s.style)
    };
}
