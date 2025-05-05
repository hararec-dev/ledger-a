import { Text, View } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { LegalLink } from '../../components';
import { useCurrentStatusAppStore, useAppNavigation, useStyles } from '../../hooks';
import { LEGAL_ACCEPTANCE_LABELS } from '../../config';


export const LegalAcceptanceFooter: React.FC = () => {
    const { goToLegalInfo } = useAppNavigation();
    const { legalConditionsAreAccepted, setLegalConditionsAreAccepted } = useCurrentStatusAppStore();
    const handleCheckboxPress = () => setLegalConditionsAreAccepted(!legalConditionsAreAccepted);
    const styles = useStyles(({ colors, screenWidth }) => ({
        container: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: screenWidth * 0.6,
        },
        checkboxContainer: {
            padding: 3,
            borderRadius: 5,
            backgroundColor: colors.coolGray[100],
        },
        textContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
        baseText: {
            fontSize: 12,
            color: colors.coolGray[900],
        },
        checkedColor: {
            color: colors.fuchsia[600],
        },
        uncheckedColor: {
            color: colors.fuchsia[100],
        },
    }));

    return (
        <View style={styles.container}>
            <CheckBox
                iconType="ionicon"
                checkedIcon="checkbox-outline"
                uncheckedIcon="square-outline"
                checked={legalConditionsAreAccepted}
                checkedColor={styles.checkedColor.color}
                uncheckedColor={styles.uncheckedColor.color}
                onPress={handleCheckboxPress}
                containerStyle={styles.checkboxContainer}
            />
            <View style={[styles.textContainer]}>
                <Text style={styles.baseText}>
                    {LEGAL_ACCEPTANCE_LABELS.accept}
                </Text>
                <LegalLink
                    onPress={() => goToLegalInfo('terms')}
                    text={LEGAL_ACCEPTANCE_LABELS.termsAndConditions}
                />
                <Text style={styles.baseText}>
                    {LEGAL_ACCEPTANCE_LABELS.and}
                </Text>
                <LegalLink
                    onPress={() => goToLegalInfo('privacy')}
                    text={LEGAL_ACCEPTANCE_LABELS.privacyPolicy}
                />
            </View>
        </View>
    );
};

