import type { ImageStyle, Platform, TextStyle, ViewStyle } from 'react-native';
import type { AppFonts, FullColorPallete } from '../config';


export type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export interface StyleCallbackProps {
    isDark: boolean;
    colors: FullColorPallete;
    screenWidth: number;
    screenHeight: number;
    fontScale: number;
    scale: number;
    Platform: Platform;
    fonts: AppFonts;
  }
