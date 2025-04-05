import { useCallback, useEffect, useState } from 'react';
import { AUTH_CONFIG, AUTH_TEXTS } from '../../config';

export const useAuthAttempts = () => {
    const [attempts, setAttempts] = useState(0);
    const [lockout, setLockout] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        if (attempts >= AUTH_CONFIG.MAX_ATTEMPTS) {
            setLockout(true);
            setRemainingTime(Math.floor(AUTH_CONFIG.LOCKOUT_DURATION / 1000));
            const intervalId = setInterval(() => {
                setRemainingTime(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalId);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            const timerId = setTimeout(() => {
                setAttempts(0);
                setLockout(false);
                setRemainingTime(0);
            }, AUTH_CONFIG.LOCKOUT_DURATION);

            return () => {
                clearInterval(intervalId);
                clearTimeout(timerId);
            };
        }
    }, [attempts]);

    const handleFailedAttempt = useCallback(() => {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        const message = newAttempts >= AUTH_CONFIG.MAX_ATTEMPTS
            ? AUTH_TEXTS.MAX_ATTEMPTS_MESSAGE
            : AUTH_TEXTS.FAILED_ATTEMPT_MESSAGE(newAttempts, AUTH_CONFIG.MAX_ATTEMPTS);

        setErrorMessage(message);
        setShowErrorDialog(true);
    }, [attempts]);

    const resetAttempts = useCallback(() => {
        setAttempts(0);
    }, []);

    const closeErrorDialog = useCallback(() => {
        setShowErrorDialog(false);
    }, []);

    return {
        attempts,
        lockout,
        errorMessage,
        showErrorDialog,
        remainingTime,
        handleFailedAttempt,
        resetAttempts,
        closeErrorDialog,
    };
};
