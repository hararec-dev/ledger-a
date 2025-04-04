import { StyleSheet, View } from 'react-native';
import { AuthHeader, AuthInstructions } from '../../components';
import type { LoginHeaderProps } from '../../types';


export const LoginHeader = ({
    themeGradient,
    touchIdEnabled,
    pinEnabled,
    loadingPinAuth,
    loadingTouchIdAuth,
}: LoginHeaderProps) => (
    <View style={styles.headerContainer}>
        <AuthHeader themeGradient={themeGradient} />
        <AuthInstructions
            touchIdEnabled={touchIdEnabled}
            pinEnabled={pinEnabled}
            loadingPinAuth={loadingPinAuth}
            loadingTouchIdAuth={loadingTouchIdAuth}
        />
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
