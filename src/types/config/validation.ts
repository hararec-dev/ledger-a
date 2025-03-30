export interface ValidationConstants {
    ONBOARDING_SETUP: {
        REQUIRED: {
            currency: string;
            accountName: string;
            initialAmount: string;
            pin: string;
            confirmPin: string;
        };
        NUMERIC: {
            positiveNumber: string;
        };
        PIN: {
            length: string;
            match: string;
            onlyNumbers: string;
        }
    };
}
