/* Colors obtained from https://v2.tailwindcss.com/docs/customizing-colors */

import type { Theme } from '@react-navigation/native';
import type { AppFonts, FullColorPallete, RneuiPlatformColors } from '../types';

export const colorPalette: FullColorPallete = {
    blueGray: {
        50: '#F8FAFC',
        100: '#F1F5F9',
        200: '#E2E8F0',
        300: '#CBD5E1',
        400: '#94A3B8',
        500: '#64748B',
        600: '#475569',
        700: '#334155',
        800: '#1E293B',
        900: '#0F172A',
    },
    coolGray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
    },
    gray: {
        50: '#FAFAFA',
        100: '#F4F4F5',
        200: '#E4E4E7',
        300: '#D4D4D8',
        400: '#A1A1AA',
        500: '#71717A',
        600: '#52525B',
        700: '#3F3F46',
        800: '#27272A',
        900: '#18181B',
    },
    trueGray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
    },
    warmGray: {
        50: '#FAFAF9',
        100: '#F5F5F4',
        200: '#E7E5E4',
        300: '#D6D3D1',
        400: '#A8A29E',
        500: '#78716C',
        600: '#57534E',
        700: '#44403C',
        800: '#292524',
        900: '#1C1917',
    },
    red: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
    },
    orange: {
        50: '#FFF7ED',
        100: '#FFEDD5',
        200: '#FED7AA',
        300: '#FDBA74',
        400: '#FB923C',
        500: '#F97316',
        600: '#EA580C',
        700: '#C2410C',
        800: '#9A3412',
        900: '#7C2D12',
    },
    amber: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
    },
    yellow: {
        50: '#FEFCE8',
        100: '#FEF9C3',
        200: '#FEF08A',
        300: '#FDE047',
        400: '#FACC15',
        500: '#EAB308',
        600: '#CA8A04',
        700: '#A16207',
        800: '#854D0E',
        900: '#713F12',
    },
    lime: {
        50: '#F7FEE7',
        100: '#ECFCCB',
        200: '#D9F99D',
        300: '#BEF264',
        400: '#A3E635',
        500: '#84CC16',
        600: '#65A30D',
        700: '#4D7C0F',
        800: '#3F6212',
        900: '#365314',
    },
    green: {
        50: '#F0FDF4',
        100: '#DCFCE7',
        200: '#BBF7D0',
        300: '#86EFAC',
        400: '#4ADE80',
        500: '#22C55E',
        600: '#16A34A',
        700: '#15803D',
        800: '#166534',
        900: '#14532D',
    },
    emerald: {
        50: '#ECFDF5',
        100: '#D1FAE5',
        200: '#A7F3D0',
        300: '#6EE7B7',
        400: '#34D399',
        500: '#10B981',
        600: '#059669',
        700: '#047857',
        800: '#065F46',
        900: '#064E3B',
    },
    teal: {
        50: '#F0FDFA', 100: '#CCFBF1', 200: '#99F6E4', 300: '#5EEAD4',
        400: '#2DD4BF', 500: '#14B8A6', 600: '#0D9488', 700: '#0F766E',
        800: '#115E59', 900: '#134E4A',
    },
    cyan: {
        50: '#ECFEFF', 100: '#CFFAFE', 200: '#A5F3FC', 300: '#67E8F9',
        400: '#22D3EE', 500: '#05B5E0', 600: '#0891B2', 700: '#0E7490',
        800: '#155E75', 900: '#164E63',
    },
    sky: {
        50: '#F0F9FF', 100: '#E0F2FE', 200: '#BAE6FD', 300: '#7DD3FC',
        400: '#38BDF8', 500: '#0EA5E9', 600: '#0284C7', 700: '#0369A1',
        800: '#075985', 900: '#0C4A6E',
    },
    blue: {
        50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD',
        400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8',
        800: '#1E40AF', 900: '#1E3A8A',
    },
    indigo: {
        50: '#EEF2FF', 100: '#E0E7FF', 200: '#C7D2FE', 300: '#A5B4FC',
        400: '#818CF8', 500: '#6366F1', 600: '#4F46E5', 700: '#4338CA',
        800: '#3730A3', 900: '#312E81',
    },
    violet: {
        50: '#F5F3FF', 100: '#EDE9FE', 200: '#DDD6FE', 300: '#C4B5FD',
        400: '#A78BFA', 500: '#8B5CF6', 600: '#7C3AED', 700: '#6D28D9',
        800: '#5B21B6', 900: '#4C1D95',
    },
    purple: {
        50: '#FAF5FF', 100: '#F3E8FF', 200: '#E9D5FF', 300: '#D8B4FE',
        400: '#C084FC', 500: '#A855F7', 600: '#9333EA', 700: '#7E22CE',
        800: '#6B21A8', 900: '#581C87',
    },
    fuchsia: {
        50: '#FDF4FF', 100: '#FAE8FF', 200: '#F5D0FE', 300: '#F0ABFC',
        400: '#E879F9', 500: '#D946EF', 600: '#C026D3', 700: '#A21CAF',
        800: '#86198F', 900: '#701A75',
    },
    pink: {
        50: '#FDF2F8', 100: '#FCE7F3', 200: '#FBCFE8', 300: '#F9A8D4',
        400: '#F472B6', 500: '#EC4899', 600: '#DB2777', 700: '#BE185D',
        800: '#9D174D', 900: '#831843',
    },
    rose: {
        50: '#FFF1F2', 100: '#FFE4E6', 200: '#FECDD3', 300: '#FDA4AF',
        400: '#FB7185', 500: '#F43F5E', 600: '#E11D48', 700: '#BE123C',
        800: '#9F1239', 900: '#881337',
    },
};

export const rneuiLightColors: RneuiPlatformColors = {
    primary: colorPalette.fuchsia[600],
    secondary: colorPalette.indigo[500],
    grey: colorPalette.coolGray[400],
    searchBg: colorPalette.coolGray[100],
    success: colorPalette.green[500],
    error: colorPalette.red[500],
    warning: colorPalette.amber[500],
};

export const rneuiDarkColors: RneuiPlatformColors = {
    primary: colorPalette.fuchsia[500],
    secondary: colorPalette.indigo[300],
    grey: colorPalette.coolGray[500],
    searchBg: colorPalette.coolGray[800],
    success: colorPalette.green[400],
    error: colorPalette.red[400],
    warning: colorPalette.amber[400],
};

export const appFonts: AppFonts = {
    quicksand: {
        regular: 'Quicksand-Regular',
        light: 'Quicksand-Light',
        medium: 'Quicksand-Medium',
        bold: 'Quicksand-Bold',
    },
    nunito: {
        regular: 'Nunito-Regular',
        medium: 'Nunito-Medium',
        bold: 'Nunito-Bold',
    },
    pacifico: {
        regular: 'Pacifico-Regular',
    },
};

export const LightNavigationTheme: Theme = {
    dark: false,
    colors: {
        primary: colorPalette.warmGray[900],
        background: colorPalette.coolGray[200],
        text: colorPalette.warmGray[900],
        card: colorPalette.coolGray[50],
        border: colorPalette.gray[200],
        notification: colorPalette.red[500],
    },
    fonts: {
        regular: {
            fontFamily: appFonts.quicksand.regular,
            fontWeight: '400',
        },
        medium: {
            fontFamily: appFonts.quicksand.medium,
            fontWeight: '500',
        },
        bold: {
            fontFamily: appFonts.quicksand.bold,
            fontWeight: '700',
        },
        heavy: {
            fontFamily: appFonts.nunito.bold,
            fontWeight: '900',
        },
    },
};

export const DarkNavigationTheme: Theme = {
    dark: true,
    colors: {
        primary: colorPalette.coolGray[50],
        background: colorPalette.coolGray[700],
        text: colorPalette.coolGray[50],
        card: colorPalette.gray[900],
        border: colorPalette.gray[700],
        notification: colorPalette.red[800],
    },
    fonts: {
        regular: {
            fontFamily: appFonts.quicksand.regular,
            fontWeight: '400',
        },
        medium: {
            fontFamily: appFonts.quicksand.medium,
            fontWeight: '500',
        },
        bold: {
            fontFamily: appFonts.quicksand.bold,
            fontWeight: '700',
        },
        heavy: {
            fontFamily: appFonts.nunito.bold,
            fontWeight: '900',
        },
    },
};
