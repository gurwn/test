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
    description: string; // One-line summary for the card
    tags: string[]; // "Recommended For" tags
    badMatch: string[]; // "Avoid If" tags
    imagePath: string;
    position: string; // e.g. "Standard of K-Perm"
}

export type QuestionId = 'forehead' | 'vibe' | 'maintenance';

export interface AnswerOption {
    value: string;
    label: string;
    description?: string;
}

export interface Question {
    id: QuestionId;
    title: string;
    options: AnswerOption[];
}
