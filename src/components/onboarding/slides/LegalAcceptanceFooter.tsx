import { TouchableOpacity, Text, View } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { useCurrentStatusAppStore, useCustomNavigation, useThemeStore } from '../../../hooks';

export const LegalAcceptanceFooter = () => {
    const {
        legalConditionsAreAccepted,
        setLegalConditionsAreAccepted
    } = useCurrentStatusAppStore();
    const { colors } = useThemeStore();
    const { goToLegalInfo } = useCustomNavigation();

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
        }}>
            <CheckBox
                iconType='ionicon'
                checkedIcon='checkbox-outline'
                uncheckedIcon='square-outline'
                checked={legalConditionsAreAccepted}
                checkedColor={colors.fuchsia[600]}
                uncheckedColor={colors.fuchsia[100]}
                onPress={() => setLegalConditionsAreAccepted(!legalConditionsAreAccepted)}
                containerStyle={{ padding: 3, backgroundColor: colors.coolGray[100] }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                <Text style={{ color: colors.coolGray[900], fontSize: 12 }}>
                    Aceptar
                </Text>
                <TouchableOpacity onPress={() => goToLegalInfo('terms')}>
                    <Text style={{
                        color: colors.coolGray[500],
                        textDecorationLine: 'underline',
                        fontSize: 12,
                        marginHorizontal: 4
                    }}>
                        términos y condiciones
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: colors.coolGray[900], fontSize: 12 }}>
                    y
                </Text>
                <TouchableOpacity onPress={() => goToLegalInfo('privacy')}>
                    <Text style={{
                        color: colors.coolGray[500],
                        textDecorationLine: 'underline',
                        fontSize: 12,
                        marginLeft: 4
                    }}>
                        política de privacidad
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}