import LinearGradient from 'react-native-linear-gradient';
import type { GradientBackgroundProps } from '../../types';

export const GradientBackground: React.FC<GradientBackgroundProps> = ({ gradient, children, style }) => {
    return (
        <LinearGradient
            colors={gradient}
            style={style}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            {children}
        </LinearGradient>
    );
};
