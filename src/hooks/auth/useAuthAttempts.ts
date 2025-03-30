import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { AUTH_CONFIG, AUTH_TEXTS } from '../../config';

export const useAuthAttempts = () => {
    const [attempts, setAttempts] = useState(0);
    const [lockout, setLockout] = useState(false);

    useEffect(() => {
        if (attempts >= AUTH_CONFIG.MAX_ATTEMPTS) {
            setLockout(true);
            const timer = setTimeout(() => {
                setAttempts(0);
                setLockout(false);
            }, AUTH_CONFIG.LOCKOUT_DURATION);
            return () => clearTimeout(timer);
        }
    }, [attempts]);

    const handleFailedAttempt = useCallback(() => {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        const message = newAttempts >= AUTH_CONFIG.MAX_ATTEMPTS
            ? AUTH_TEXTS.MAX_ATTEMPTS_MESSAGE
            : AUTH_TEXTS.FAILED_ATTEMPT_MESSAGE(newAttempts, AUTH_CONFIG.MAX_ATTEMPTS);
        Alert.alert(AUTH_TEXTS.ERROR_TITLE, message);
    }, [attempts]);

    const resetAttempts = useCallback(() => {
        setAttempts(0);
    }, []);

    return {
        attempts,
        lockout,
        handleFailedAttempt,
        resetAttempts,
    };
};
