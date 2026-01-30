import { HAIRSTYLES } from './data';
import { StyleType } from './types';
import { FaceShape } from '@/lib/faceAnalysis';

export const recommendStyle = (
    q1: string, // Male: Forehead, Female: Length
    q2: string, // Male: Vibe, Female: Vibe
    q3: string, // Male: Maintenance, Female: Maintenance
    faceShape?: FaceShape,
    gender: 'male' | 'female' = 'male'
): StyleType => {
    if (gender === 'female') {
        return recommendFemaleStyle(q1, q2, q3, faceShape);
    }

    // --- MALE LOGIC (Existing) ---
    const forehead = q1;
    const vibe = q2;
    const maintenance = q3;

    // 0. Face Shape Overrides (Strong Constraints)
    if (faceShape === 'square') {
        if (vibe === 'character') return 'hippie_perm';
        if (maintenance === 'hard') return 'garma_perm';
    }

    if (faceShape === 'long') {
        if (forehead === 'full') return 'as_perm';
    }

    // 1. Forehead: None (Covered)
    if (forehead === 'none') {
        if (vibe === 'character') return 'crop_cut';
        if (vibe === 'natural') return 'shadow_perm';
        return 'see_through_cut';
    }

    // 2. Forehead: Little (Partial)
    if (forehead === 'little') {
        if (vibe === 'standard' || vibe === 'natural') return 'as_perm';
        if (vibe === 'character') return 'hippie_perm';
        return 'as_perm';
    }

    // 3. Forehead: Full (Open)
    if (forehead === 'full') {
        if (vibe === 'standard') return 'garma_perm';
        if (vibe === 'character') {
            if (maintenance === 'hard') return 'sleek_cut';
            return 'hippie_perm';
        }
        if (vibe === 'natural') return 'garma_perm';
        return maintenance === 'hard' ? 'sleek_cut' : 'garma_perm';
    }

    return 'as_perm';
};

const recommendFemaleStyle = (
    length: string, // short, medium, long
    vibe: string,   // lovely, chic, innocent
    maintenance: string, // easy, hard
    faceShape?: FaceShape
): StyleType => {

    // 0. Face Shape Overrides
    // Square Face -> Avoid Tassel Cut (Chin length blunt cut accentuates jaw) -> Recommend Hush or Layered
    if (faceShape === 'square') {
        if (length === 'short') return 'hash_cut'; // Better than Tassel
        if (length === 'long' && vibe === 'chic') return 'hush_cut'; // Hiding jawline
    }

    // Long Face -> Avoid Sleek Cut (Makes face longer) -> Recommend Perms/Volume
    if (faceShape === 'long') {
        if (length === 'long') return 'elizabeth_perm'; // Side volume
    }

    // 1. Short Hair
    if (length === 'short') {
        if (vibe === 'chic') return 'tassel_cut';
        if (vibe === 'lovely') return 'hash_cut'; // Hash can be cute too
        if (vibe === 'innocent') return 'hash_cut'; // Soft hash
        // Fallback
        return maintenance === 'hard' ? 'tassel_cut' : 'hash_cut';
    }

    // 2. Medium Hair
    if (length === 'medium') {
        if (vibe === 'lovely' || vibe === 'innocent') return 'wendy_cut'; // The standard
        if (vibe === 'chic') return 'build_perm'; // More structured
        // Fallback
        return 'wendy_cut';
    }

    // 3. Long Hair
    if (length === 'long') {
        if (vibe === 'chic') {
            if (maintenance === 'hard') return 'sleek_cut_w';
            return 'hush_cut';
        }
        if (vibe === 'lovely') {
            return 'hippie_perm_w'; // Jelly/Hippie
        }
        if (vibe === 'innocent') {
            return 'elizabeth_perm'; // Elegant/Innocent
        }
        return 'elizabeth_perm';
    }

    return 'wendy_cut'; // Safest default
};
