import type ReactNativeBiometrics from 'react-native-biometrics';
import type { BiometryType } from 'react-native-biometrics';

export interface SensorStatus {
    available: boolean;
    biometryType: BiometryType | undefined;
    error?: string;
}

interface HandleErrorCallback {
    errorCallback: Function;
    args: any[]
}

export interface BiometricOperation<T> {
    operation: () => Promise<T>;
    handleErrorCallback?: HandleErrorCallback;
}

export interface CreateSignatureParams {
    promptMessage: string;
    payload: string;
    cancelButtonText?: string;
    handleErrorCallback?: HandleErrorCallback;
}


export interface BiometricsState {
    sensorStatus: SensorStatus | null;
    allowBiometricAuth: boolean;
    isLoadingBiometricAuth: boolean;
    rnBiometrics: ReactNativeBiometrics;
    checkBiometricAvailability: (handleErrorCallback?: HandleErrorCallback) => Promise<boolean | void>;
    createKeys: (handleErrorCallback?: HandleErrorCallback) => Promise<string | void>;
    biometricKeysExist: (handleErrorCallback?: HandleErrorCallback) => Promise<boolean | void>;
    deleteKeys: (handleErrorCallback?: HandleErrorCallback) => Promise<boolean | void>;
    createSignature: (params: CreateSignatureParams) => Promise<any>;
    handleBiometricOperation: <T>(params: BiometricOperation<T>) => Promise<T | void>;
    setAllowBiometricAuth: (allow: boolean) => Promise<void>;
    loadBiometricAuth: () => Promise<boolean | void>;
}
