import LinearGradient from 'react-native-linear-gradient';
import type { GradientBackgroundProps } from '../../types';
import { useGradient } from '../../hooks';

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
    gradient,
    children,
    style,
    isBlackOrWhite,
}) => {
    const { blackOrWhiteGradient, themeGradient } = useGradient();

    return (
        <LinearGradient
            colors={
                isBlackOrWhite
                    ? blackOrWhiteGradient
                    : gradient
                        ? gradient
                        : themeGradient
            }
            style={style}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            {children}
        </LinearGradient>
    );
};
