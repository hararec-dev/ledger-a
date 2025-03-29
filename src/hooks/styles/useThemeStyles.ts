import { useMemo } from 'react';
import { useThemeStore } from '../store';
import type { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import type { FullColorPallete } from '../../types';

export const useThemeStyles = <T extends Record<string, ViewStyle | TextStyle | ImageStyle>>(
  styleCallback: (theme: { isDark: boolean; colors: FullColorPallete }) => T
) => {
  const { isDark, colors } = useThemeStore();
  
  return useMemo(() => styleCallback({ isDark, colors }), [isDark, colors, styleCallback]);
};