import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList, TypeLegalInfo, TypeSetup } from '../../types';

export const useCustomNavigation = () => {
    const rootNavigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const goToLegalInfo = useCallback(
        (typeInfo: TypeLegalInfo) => {
            rootNavigation.navigate('LegalInfo', { typeInfo });
        },
        [rootNavigation]
    );

    const goToSetup = useCallback(
        (typeSetup: TypeSetup) => {
            rootNavigation.navigate('OnboardingSetup', { typeSetup });
        },
        [rootNavigation]
    );

    return {
        goToLegalInfo,
        goToSetup,
    };
};
