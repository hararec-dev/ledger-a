import React from 'react';
import { Text } from 'react-native';
import { useStyles } from '@hooks';
import { AUTH_SCREEN_TEXTS } from '@config';
import type { LockoutMessageProps } from '@types';


export const LockoutMessage: React.FC<LockoutMessageProps> = ({ isVisible, remainingTime }) => {
    const styles = useStyles(({ colors, fonts }) => ({
        lockoutText: {
            marginTop: 20,
            color: colors.red[500],
            textAlign: 'center',
            fontFamily: fonts.nunito.regular,
            fontSize: 14,
            fontWeight: 'bold',
        },
    }));

    return !isVisible
        ? null
        : (
            <Text style={styles.lockoutText}>
                {`${AUTH_SCREEN_TEXTS.lockoutMessage.prefix}${remainingTime}${AUTH_SCREEN_TEXTS.lockoutMessage.seconts}`}
            </Text>
        );
};
