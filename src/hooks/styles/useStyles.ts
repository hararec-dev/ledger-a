import { useMemo } from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { useThemeStore } from '../../hooks';
import type { NamedStyles, StyleCallbackProps } from '../../types';


export const useStyles = <T extends NamedStyles<T>>(
  styleCallback: (theme: StyleCallbackProps) => T & NamedStyles<T>
) => {
  const { isDark, colors } = useThemeStore();
  const { width, height, fontScale, scale } = useWindowDimensions();
  const styles = useMemo(
    () => styleCallback({
      isDark,
      colors,
      Platform,
      screenWidth: width,
      screenHeight: height,
      fontScale,
      scale,
    }),
    [styleCallback, isDark, colors, width, height, fontScale, scale]
  );

  return styles;
};
