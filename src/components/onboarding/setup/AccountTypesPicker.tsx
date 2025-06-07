import { accountsInfo, ONBOARDING_SETUP_TEXT } from '@config';
import type { AccountTypePickerProps } from '@types';
import { OptionPicker } from '@components/common';


export const AccountTypesPicker: React.FC<AccountTypePickerProps> = ({ formik, selectedAccountType }) => {
    return (
        <OptionPicker
            value={formik.values.accountType}
            options={accountsInfo}
            onValueChange={(value) => formik.setFieldValue('accountType', value)}
            placeholder={ONBOARDING_SETUP_TEXT.accountTypePlaceholder}
            selectedOption={selectedAccountType}
        />
    );
};
