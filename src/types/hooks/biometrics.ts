import type { BiometryType } from "react-native-biometrics";

export interface SensorStatus {
    available: boolean;
    biometryType: BiometryType | undefined;
    error?: string;
}

export interface CreateSignatureParams {
    promptMessage: string;
    payload: string;
    cancelButtonText?: string;
}