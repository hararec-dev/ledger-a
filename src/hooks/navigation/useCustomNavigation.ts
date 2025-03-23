import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList, TypeLegalInfo, TypeSetup } from '../../types';

export const useCustomNavigation = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const goToLegalInfo = useCallback(
        (typeInfo: TypeLegalInfo) => {
            navigation.navigate('LegalInfo', { typeInfo });
        },
        [navigation]
    );
    const goToSetup = useCallback(
        (typeSetup: TypeSetup) => {
            navigation.navigate('OnboardingSetup', { typeSetup });
        },
        [navigation]
    );

    return {
        goToLegalInfo,
        goToSetup
    };
};
