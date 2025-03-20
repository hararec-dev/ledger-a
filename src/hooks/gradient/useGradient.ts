import { useMemo } from "react";
import { useThemeStore } from "../store";

export const useGradient = () => {
    const { colors } = useThemeStore();
    const gradientDark = useMemo<string[]>(() => [
        colors.yellow[300],
        colors.orange[400],
        colors.pink[400],
    ], [colors]);
    const gradientLight = useMemo<string[]>(() => [
        colors.blue[600],
        colors.purple[600],
        colors.rose[600]
    ], [colors]);
    const gradientOnboarding = useMemo<string[]>(() => [
        colors.yellow[400],
        colors.orange[500],
        colors.pink[500],
    ], [colors]);

    return {
        gradientDark,
        gradientLight,
        gradientOnboarding,
    }
}