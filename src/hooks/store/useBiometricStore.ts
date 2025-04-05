import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { handleError } from '../../helpers';
import { BIOMETRIC_MESSAGES } from '../../config';
import type { BiometricOperation, BiometricsState, CreateSignatureParams } from '../../types';

const ALLOW_BIOMETRIC_AUTH = 'allowBiometricAuth';

export const useBiometricStore = create<BiometricsState>((set, get) => ({
    sensorStatus: null,
    allowBiometricAuth: true,
    isLoadingBiometricAuth: false,
    rnBiometrics: new ReactNativeBiometrics(),

    handleBiometricOperation: async <T,>({ operation, handleErrorCallback }: BiometricOperation<T>): Promise<T | void> => {
        try {
            return await operation();
        } catch (error) {
            if (handleErrorCallback) {
                handleError(handleErrorCallback.errorCallback, error, ...handleErrorCallback.args);
            }
        }
    },
    checkBiometricAvailability: async (handleErrorCallback = undefined) => {
        try {
            const { available, biometryType, error } = await get().rnBiometrics.isSensorAvailable();
            const isBiometricTypeValid = available && (
                biometryType === BiometryTypes.TouchID ||
                biometryType === BiometryTypes.FaceID ||
                biometryType === BiometryTypes.Biometrics
            );

            set({
                sensorStatus: {
                    available: isBiometricTypeValid,
                    biometryType,
                    error,
                },
            });
            return isBiometricTypeValid;
        } catch (error) {
            set({
                sensorStatus: {
                    available: false,
                    biometryType: undefined,
                    error: error instanceof Error ? error.message : BIOMETRIC_MESSAGES.ERRORS.UNKNOWN,
                },
            });
            if (handleErrorCallback) {
                handleError(handleErrorCallback.errorCallback, error, ...handleErrorCallback.args);
            }
        }
    },

    createKeys: async (handleErrorCallback = undefined) => {
        return get().handleBiometricOperation({
            operation: async () => {
                const { publicKey } = await get().rnBiometrics.createKeys();
                if (!publicKey) { throw new Error(BIOMETRIC_MESSAGES.ERRORS.CREATE_PUBLIC_KEY); }
                return publicKey;
            },
            handleErrorCallback,
        });
    },

    biometricKeysExist: async (handleErrorCallback = undefined) => {
        return get().handleBiometricOperation({
            operation: async () => {
                const { keysExist } = await get().rnBiometrics.biometricKeysExist();
                return keysExist;
            },
            handleErrorCallback,
        });
    },

    deleteKeys: async (handleErrorCallback = undefined) => {
        return get().handleBiometricOperation({
            operation: async () => {
                const { keysDeleted } = await get().rnBiometrics.deleteKeys();
                return keysDeleted;
            },
            handleErrorCallback,
        });
    },

    createSignature: async ({ payload, promptMessage, cancelButtonText, handleErrorCallback = undefined }: CreateSignatureParams) => {
        return get().handleBiometricOperation({
            operation: async () => {
                return await get().rnBiometrics.createSignature({
                    promptMessage,
                    cancelButtonText,
                    payload,
                });
            },
            handleErrorCallback,
        });
    },
    setAllowBiometricAuth: async (allowBiometricAuth: boolean) => {
        try {
            await AsyncStorage.setItem(ALLOW_BIOMETRIC_AUTH, String(allowBiometricAuth));
            set({ allowBiometricAuth });
        } catch (error) { }
    },
    loadBiometricAuth: async () => {
        set({ isLoadingBiometricAuth: true });
        try {
            const allowBiometricAuth = await AsyncStorage.getItem(ALLOW_BIOMETRIC_AUTH);
            return (allowBiometricAuth === 'true');
        } catch (error) { }
        finally {
            set({ isLoadingBiometricAuth: false });
        }
    },
}));
