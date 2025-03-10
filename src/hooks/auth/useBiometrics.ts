import { useState, useCallback, useMemo } from 'react'
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import type { CreateSignatureParams, SensorStatus } from '../../types';


export const useBiometrics = () => {
    const rnBiometrics = useMemo(() => new ReactNativeBiometrics({
        allowDeviceCredentials: true
    }), []);

    const [sensorStatus, setSensorStatus] = useState<SensorStatus | null>(null);

    const checkBiometricAvailability = useCallback(async () => {
        try {
            const { available, biometryType, error } = await rnBiometrics.isSensorAvailable();
            const isBiometricTypeValid = available && (
                biometryType === BiometryTypes.TouchID ||
                biometryType === BiometryTypes.FaceID ||
                biometryType === BiometryTypes.Biometrics
            );

            setSensorStatus({ available: isBiometricTypeValid, biometryType, error });
        } catch (error) {
            setSensorStatus({
                available: false,
                biometryType: undefined,
                error: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }, [rnBiometrics, sensorStatus]);

    const handleBiometricOperation = async <T,>(operation: () => Promise<T>): Promise<T> => {
        try {
            return await operation();
        } catch (error) {
            throw error instanceof Error ? error : new Error('Unknown error occurred');
        }
    };

    const createKeys = useCallback(() =>
        handleBiometricOperation(async () => {
            const { publicKey } = await rnBiometrics.createKeys();
            return publicKey;
        }), [rnBiometrics]);

    const biometricKeysExist = useCallback(() =>
        handleBiometricOperation(async () => {
            const { keysExist } = await rnBiometrics.biometricKeysExist();
            return keysExist;
        }), [rnBiometrics]);

    const deleteKeys = useCallback(() =>
        handleBiometricOperation(async () => {
            const { keysDeleted } = await rnBiometrics.deleteKeys();
            return keysDeleted;
        }), [rnBiometrics]);

    const createSignature = useCallback(async ({
        payload,
        promptMessage,
        cancelButtonText
    }: CreateSignatureParams) =>
        handleBiometricOperation(async () => {
            const result = await rnBiometrics.createSignature({
                promptMessage,
                cancelButtonText,
                payload
            });
            return result;
        }), [rnBiometrics]);

    return {
        checkBiometricAvailability,
        createKeys,
        biometricKeysExist,
        deleteKeys,
        createSignature,
        sensorStatus,
    };
};
