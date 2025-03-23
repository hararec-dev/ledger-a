import { TouchableOpacity, Text, View, useWindowDimensions, StyleSheet } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { LEGAL_ACCEPTANCE_LABELS } from '../../../config';
import { useCurrentStatusAppStore, useCustomNavigation, useThemeStore } from '../../../hooks';
import type { LegalLinkProps } from '../../../types';


const LegalLink: React.FC<LegalLinkProps> = ({ onPress, text, marginStyle, colors }) => (
    <TouchableOpacity onPress={onPress}>
        <Text style={{
            ...styles.linkText,
            color: colors.coolGray[500],
            ...marginStyle
        }}>
            {text}
        </Text>
    </TouchableOpacity>
);

export const LegalAcceptanceFooter: React.FC = () => {
    const {
        legalConditionsAreAccepted,
        setLegalConditionsAreAccepted
    } = useCurrentStatusAppStore();
    const { colors } = useThemeStore();
    const { width } = useWindowDimensions();
    const { goToLegalInfo } = useCustomNavigation();
    const handleCheckboxPress = () => setLegalConditionsAreAccepted(!legalConditionsAreAccepted);
    
    return (
        <View style={styles.container}>
            <CheckBox
                iconType='ionicon'
                checkedIcon='checkbox-outline'
                uncheckedIcon='square-outline'
                checked={legalConditionsAreAccepted}
                checkedColor={colors.fuchsia[600]}
                uncheckedColor={colors.fuchsia[100]}
                onPress={handleCheckboxPress}
                containerStyle={{
                    ...styles.checkboxContainer,
                    backgroundColor: colors.coolGray[100]
                }}
            />
            <View style={[styles.textContainer, { width: width * 0.5 }]}>
                <Text style={[styles.baseText, { color: colors.coolGray[900] }]}>
                    {LEGAL_ACCEPTANCE_LABELS.accept}
                </Text>
                <LegalLink
                    onPress={() => goToLegalInfo('terms')}
                    text={LEGAL_ACCEPTANCE_LABELS.termsAndConditions}
                    marginStyle={{ marginHorizontal: 4 }}
                    colors={colors}
                />
                <Text style={[styles.baseText, { color: colors.coolGray[900] }]}>
                    {LEGAL_ACCEPTANCE_LABELS.and}
                </Text>
                <LegalLink
                    onPress={() => goToLegalInfo('privacy')}
                    text={LEGAL_ACCEPTANCE_LABELS.privacyPolicy}
                    marginStyle={{ marginLeft: 4 }}
                    colors={colors}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxContainer: {
        padding: 3,
        borderRadius: 5,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    baseText: {
        fontSize: 12,
    },
    linkText: {
        textDecorationLine: 'underline',
        fontSize: 12,
    }
});