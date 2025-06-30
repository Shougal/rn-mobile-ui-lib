

type CornerRadius = keyof typeof cornerRadius;

export const cornerRadius = {
    xs: 4,
    s: 8,
    m: 16,
    l: 32
} as const


type Gap = keyof typeof gap;
export const gap = {
    '2xs': 4,
    'xs': 8,
    's': 16,
    'm': 32
} as const



type Padding = keyof typeof padding;
export const padding = {
    '2xs': 4,
    'xs': 8,
    'm': 16,
    'l': 32
} as const


type FontSize = keyof typeof fontSize;
export const fontSize = {
    xs: 8,
    sm: 16,
    m: 32,
} as const


type LineHeight = keyof typeof lineHeight;
export const lineHeight = {
    default: 1.4
} as const