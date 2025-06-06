import { Text, View } from 'react-native';
import { AccountTypesPicker, CurrencyPicker, FormSetupGroup, GradientButton, GradientInput } from '@components';
import { ONBOARDING_SETUP_TEXT } from '@config';
import { useStyles } from '@hooks';
import type { OnboardingSetupFormProps } from '@types';


export const OnboardingSetupAccountForm: React.FC<OnboardingSetupFormProps> = ({
    formik,
    selectedCurrency,
    selectedAccountType,
    gradientColors,
}) => {
    const styles = useStyles(({ colors, fonts }) => ({
        formContainer: {
            rowGap: 10,
            width: '90%',
        },
        buttonText: {
            color: colors.coolGray[50],
            fontSize: 18,
            fontFamily: fonts.quicksand.bold,
        },
        button: {
            marginTop: 40,
        },
        disabledButton: {
            opacity: 0.4,
            backgroundColor: colors.coolGray[300],
            borderColor: colors.coolGray[400],
            borderRadius: 10,
        },
    }));

    return (
        <View style={styles.formContainer}>
            <FormSetupGroup
                label={ONBOARDING_SETUP_TEXT.accountNameLabel}
                error={formik.errors.accountName}
                touched={formik.touched.accountName}
            >
                <GradientInput
                    value={formik.values.accountName}
                    onChangeText={(e: string) => {
                        formik.handleChange('accountName')(e);
                        formik.setFieldTouched('accountName', true, false);
                    }}
                    onBlur={() => formik.handleBlur('accountName')}
                    placeholder={ONBOARDING_SETUP_TEXT.accountNamePlaceholder}
                    autoFocus
                />
            </FormSetupGroup>

            <FormSetupGroup
                label={ONBOARDING_SETUP_TEXT.initialAmountLabel}
                error={formik.errors.initialAmount}
                touched={formik.touched.initialAmount}
            >
                <GradientInput
                    value={formik.values.initialAmount}
                    onChangeText={(e: string) => {
                        formik.handleChange('initialAmount')(e);
                        formik.setFieldTouched('initialAmount', true, false);
                    }}
                    onBlur={() => formik.handleBlur('initialAmount')}
                    placeholder={ONBOARDING_SETUP_TEXT.initialAmountPlaceholder}
                    keyboardType="numeric"
                />
            </FormSetupGroup>

            <FormSetupGroup
                label={ONBOARDING_SETUP_TEXT.currencyLabel}
                error={formik.errors.currency}
                touched={formik.touched.currency}
            >
                <CurrencyPicker formik={formik} selectedCurrency={selectedCurrency} />
            </FormSetupGroup>

            <FormSetupGroup
                label={ONBOARDING_SETUP_TEXT.accountTypeLabel}
                error={formik.errors.currency}
                touched={formik.touched.currency}
            >
                <AccountTypesPicker formik={formik} selectedAccountType={selectedAccountType} />
            </FormSetupGroup>

            <GradientButton
                onPress={() => formik.handleSubmit()}
                gradientColors={gradientColors}
                style={styles.button}
                disabled={!formik.isValid || !formik.dirty}
                disabledStyle={styles.disabledButton}
            >
                <Text style={styles.buttonText}>{ONBOARDING_SETUP_TEXT.setup.submitButton}</Text>
            </GradientButton>
        </View>
    );
};

