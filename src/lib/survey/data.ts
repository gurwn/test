import { Question, HairStyle } from './types';
import { HAIRSTYLES as MALE_HAIRSTYLES_DATA } from './data_male';
import { FEMALE_HAIRSTYLES as FEMALE_HAIRSTYLES_DATA } from './data_female';

export const HAIRSTYLES: Record<string, HairStyle> = MALE_HAIRSTYLES_DATA;
export const FEMALE_HAIRSTYLES: Record<string, HairStyle> = FEMALE_HAIRSTYLES_DATA;

export const QUESTIONS: Question[] = [
    {
        id: 'forehead',
        title: 'Q1. How much forehead exposure?',
        titleKo: 'Q1. 원하는 이마 노출 정도는?',
        options: [
            { value: 'none', label: 'Cover Full', labelKo: '완전 덮기', description: 'Shy about forehead', descriptionKo: '이마 보이는 건 부끄러워요' },
            { value: 'little', label: 'Slightly Open', labelKo: '살짝만 보이기', description: 'Not too open, not too closed', descriptionKo: '답답한 건 싫지만 다 까긴 부담' },
            { value: 'full', label: 'Full Open', labelKo: '시원하게 까기', description: 'Confident with forehead', descriptionKo: '이마 미남, 자신감 뿜뿜' },
        ],
    },
    {
        id: 'vibe',
        title: 'Q2. What vibe do you prefer?',
        titleKo: 'Q2. 평소 추구하는 분위기는?',
        options: [
            { value: 'standard', label: 'Neat & Standard', labelKo: '깔끔/단정', description: 'Standard handsome look', descriptionKo: '호불호 없는 훈남 스타일' },
            { value: 'character', label: 'Hip & Unique', labelKo: '힙함/개성', description: 'Distinct self-style', descriptionKo: '나만의 색깔이 뚜렷했으면' },
            { value: 'natural', label: 'Natural', labelKo: '자연스러움', description: 'Effortless look', descriptionKo: '꾸민 듯 안 꾸민 듯 편안함' },
        ],
    },
    {
        id: 'maintenance',
        title: 'Q3. Styling time in morning?',
        titleKo: 'Q3. 아침에 머리 손질, 얼마나 가능?',
        options: [
            { value: 'none', label: '3 Mins', labelKo: '3분 컷', description: 'Just shake and go', descriptionKo: '그냥 털고 나가고 싶어요' },
            { value: 'basic', label: 'Blow Dry', labelKo: '드라이 정도는', description: 'Can shape with dryer', descriptionKo: '말릴 때 모양 잡을 수 있어요' },
            { value: 'hard', label: 'Full Styling', labelKo: '각 잡고 꾸밈', description: 'Wax/Spray is fine', descriptionKo: '왁스/스프레이 사용 가능!' },
        ],
    },
];

export const FEMALE_QUESTIONS: Question[] = [
    {
        id: 'forehead',
        title: 'Q1. Current (or desired) Length?',
        titleKo: 'Q1. 현재(또는 원하는) 기장은?',
        options: [
            { value: 'short', label: 'Short/Bob', labelKo: '숏/단발', description: 'Fresh neck line', descriptionKo: '목선이 드러나는 산뜻한 기장' },
            { value: 'medium', label: 'Medium', labelKo: '중단발 (거지존)', description: 'Shoulder length', descriptionKo: '어깨에 닿는 애매한 기장' },
            { value: 'long', label: 'Long', labelKo: '장발', description: 'Below chest', descriptionKo: '가슴 아래로 내려오는 긴 머리' },
        ],
    },
    {
        id: 'vibe',
        title: 'Q2. Desired Vibe?',
        titleKo: 'Q2. 원하는 분위기는?',
        options: [
            { value: 'lovely', label: 'Lovely/Cute', labelKo: '러블리/큐티', description: 'Adorable image', descriptionKo: '사랑스럽고 귀여운 느낌' },
            { value: 'chic', label: 'Chic/Hip', labelKo: '시크/힙', description: 'Urban & Stylish', descriptionKo: '도시적이고 세련된 느낌' },
            { value: 'innocent', label: 'Innocent/Natural', labelKo: '청순/자연스러움', description: 'Clean & Soft', descriptionKo: '깨끗하고 부드러운 이미지' },
        ],
    },
    {
        id: 'maintenance',
        title: 'Q3. Styling Preference',
        titleKo: 'Q3. 손질 선호도',
        options: [
            { value: 'easy', label: 'Easy Dry', labelKo: '털어 말리기만', description: 'Hate styling, comfort first', descriptionKo: '손질 귀찮아요, 편한 게 최고' },
            { value: 'hard', label: 'Iron/Dryer', labelKo: '고데기/드라기 가능', description: 'Beauty over comfort', descriptionKo: '예뻐질 수 있다면 감수함!' },
        ],
    },
];
