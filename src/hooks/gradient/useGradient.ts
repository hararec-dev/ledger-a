import { useMemo } from "react";
import { useThemeStore } from "../store";

export const useGradient = () => {
    const { colors } = useThemeStore();
    const gradientDarkColors = useMemo<string[]>(() => [
        colors.yellow[300],
        colors.orange[400],
        colors.pink[400],
    ], [colors]);
    const gradientLightColors = useMemo<string[]>(() => [
        colors.blue[600],
        colors.purple[600],
        colors.rose[600]
    ], [colors]);

    return {
        gradientDarkColors,
        gradientLightColors
    }
}