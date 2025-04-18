import { currencies, ONBOARDING_SETUP_TEXT } from '../../../config';
import type { CurrencyPickerProps } from '../../../types';
import { OptionPicker } from '../../common/OptionPicker';


export const CurrencyPicker: React.FC<CurrencyPickerProps> = ({ formik, selectedCurrency }) => {
    return (
        <OptionPicker
            value={formik.values.currency}
            options={currencies}
            onValueChange={(value) => formik.setFieldValue('currency', value)}
            placeholder={ONBOARDING_SETUP_TEXT.currencyPlaceholder}
            selectedOption={selectedCurrency}
        />
    );
};
