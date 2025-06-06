import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import type { ProviderProps } from '../../types';

export const SafeProvider = ({ children }: ProviderProps) => {
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
