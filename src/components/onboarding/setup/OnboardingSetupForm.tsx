import { StyleSheet, Text, View } from "react-native";
import { CurrencyPicker, CustomInput, FormSetupGroup, CustomGradientButton } from "../..";
import { colorPalette, ONBOARDING_SETUP_TEXT } from "../../../config";
import type { OnboardingSetupFormProps } from "../../../types";


export const OnboardingSetupForm: React.FC<OnboardingSetupFormProps> = ({
    formik,
    selectedCurrency,
    gradientLight,
    gradientOnboarding
}) => (
    <View style={styles.formContainer}>
        <FormSetupGroup
            label={ONBOARDING_SETUP_TEXT.currencyLabel}
            error={formik.errors.currency}
            touched={formik.touched.currency}
        >
            <CurrencyPicker formik={formik} selectedCurrency={selectedCurrency} />
        </FormSetupGroup>

        <FormSetupGroup
            label={ONBOARDING_SETUP_TEXT.accountNameLabel}
            error={formik.errors.accountName}
            touched={formik.touched.accountName}
        >
            <CustomInput
                value={formik.values.accountName}
                onChangeText={formik.handleChange('accountName')}
                onBlur={() => formik.handleBlur('accountName')}
                placeholder={ONBOARDING_SETUP_TEXT.accountNamePlaceholder}
                gradientLight={gradientLight}
            />
        </FormSetupGroup>

        <FormSetupGroup
            label={ONBOARDING_SETUP_TEXT.initialAmountLabel}
            error={formik.errors.initialAmount}
            touched={formik.touched.initialAmount}
        >
            <CustomInput
                value={formik.values.initialAmount}
                onChangeText={formik.handleChange('initialAmount')}
                onBlur={() => formik.handleBlur('initialAmount')}
                placeholder={ONBOARDING_SETUP_TEXT.initialAmountPlaceholder}
                gradientLight={gradientLight}
                keyboardType="numeric"
            />
        </FormSetupGroup>

        <CustomGradientButton
            onPress={() => formik.handleSubmit()}
            gradientColors={gradientOnboarding}
        >
            <Text style={styles.buttonText}>{ONBOARDING_SETUP_TEXT.submitButton}</Text>
        </CustomGradientButton>
    </View>
);

const styles = StyleSheet.create({
    formContainer: {
        rowGap: 15,
        width: '90%',
    },
    buttonText: {
        color: colorPalette.coolGray[50],
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'Quicksand-Regular',
    }
});
