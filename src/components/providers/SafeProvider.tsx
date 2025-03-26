import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import type { SafeProviderProps } from '../../types';

export const SafeProvider = ({ children }: SafeProviderProps) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    );
};
