import { View, Image, StyleSheet } from 'react-native';
import { GradientBackground, GradientText } from '../../components';
import { AUTH_SCREEN_TEXTS } from '../../config';
import type { AuthHeaderProps } from '../../types';


export const AuthHeader: React.FC<AuthHeaderProps> = ({ themeGradient }) => (
    <View style={styles.container}>
        <GradientBackground
            gradient={themeGradient}
            style={styles.gradientContainer}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo-ledger-a.png')}
                    style={styles.logo}
                />
            </View>
        </GradientBackground>
        <GradientText
            text={AUTH_SCREEN_TEXTS.appName}
            fontSize={35}
            gradientColors={themeGradient}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        columnGap: 20,
    },
    gradientContainer: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
    },
    logoContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
});

