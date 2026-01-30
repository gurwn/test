export type StyleType =
    | 'as_perm'
    | 'garma_perm'
    | 'see_through_cut'
    | 'shadow_perm'
    | 'sleek_cut'
    | 'crop_cut'
    | 'hippie_perm'
    | 'tassel_cut'
    | 'hash_cut'
    | 'wendy_cut'
    | 'build_perm'
    | 'hush_cut'
    | 'elizabeth_perm'
    | 'sleek_cut_w'
    | 'hippie_perm_w';

export interface HairStyle {
    id: StyleType;
    name: string;
    nameKo: string;
    description: string;
    descriptionKo?: string; // Add descriptionKo
    tags: string[]; // "Recommended For" (English)
    tagsKo?: string[]; // "Recommended For" (Korean)
    badMatch: string[]; // "Avoid If" (English)
    badMatchKo?: string[]; // "Avoid If" (Korean)
    imagePath: string;
    position: string;
    positionKo?: string; // Add positionKo
}

export type QuestionId = 'forehead' | 'vibe' | 'maintenance';

export interface AnswerOption {
    value: string;
    label: string; // Default or English
    labelKo?: string; // Korean
    description?: string; // Default or English
    descriptionKo?: string; // Korean
}

export interface Question {
    id: QuestionId;
    title: string; // Default or English
    titleKo?: string; // Korean
    options: AnswerOption[];
}
