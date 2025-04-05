import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import type { SafeProviderProps } from '../../types';

export const SafeProvider = ({ children }: SafeProviderProps) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = {
    container: {
        flex: 1,
    },
};
