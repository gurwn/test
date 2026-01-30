export type FaceShape = 'oval' | 'round' | 'square' | 'long' | 'triangle' | 'heart' | 'diamond';
export type Gender = 'male' | 'female';
export type HairLength = 'short' | 'medium' | 'long';
export type HairThickness = 'thin' | 'normal' | 'thick';
export type HairTexture = 'straight' | 'wavy' | 'curly' | 'coily';

export interface UserProfile {
  gender: Gender;
  images: {
    front: string;
    side: string;
    back: string;
  } | null;
  faceShape: FaceShape;
  hairCondition: {
    length: HairLength; // Current length
    thickness: HairThickness;
    texture: HairTexture;
    sideVolume: boolean; // 옆머리 뜨는지 여부
    thinning: boolean; // 숱 적음/탈모 고민
  };
  preferences: {
    vibe: string[]; // ['clean', 'trendy', 'pro', 'manly', 'cute', 'elegant', etc]
    stylingDifficulty: 'easy' | 'medium' | 'hard';
    lengthGoal: 'keep' | 'grow' | 'cut'; // Current wish
  };
}

export interface Salon {
  name: string;
  location: string;
  price: string;
  imageUrl: string;
  rating: number;
  country: string; // 'kr' | 'us'
}

export interface HairStyle {
  id: string;
  name: string;
  gender: Gender;
  category: string; // e.g., "Cut", "Perm", "Color"
  description: string;
  descriptionKo?: string; // Korean description
  nameKo?: string;        // Korean Name

  tags: string[]; // e.g., ['can-cover-wide-forehead', 'good-for-round-face']

  // Logic Weights (0 = neutral, 1 = recommended, -1 = avoid)
  faceShapeWeights: Record<FaceShape, number>;
  textureWeights: Record<HairTexture, number>;

  // For UI
  imageUrl: string;
  salonRequest: string; // "미용실 요청 멘트"
  salonRequestEn?: string; // English localized salon request
  maintenanceTips: string;
  maintenanceTipsEn?: string; // English localized maintenance tips

  recommendedSalons?: Salon[]; // New field for Salon Recommendation
}

export interface RecommendationResult {
  style: HairStyle;
  score: number;
  matchReasons: string[]; // "Good for round face", "Matches your desired vibe"
  avoidReasons: string[]; // "Might require high maintenance"
}
