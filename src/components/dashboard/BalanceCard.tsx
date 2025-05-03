import { useState } from 'react';
import { View, Text } from 'react-native';
import { GradientBackground, GradientButton, GradientText, Icon } from '../../components';
import { useStyles } from '../../hooks';
import type { BalanceCardProps } from '../../types';


export const BalanceCard: React.FC<BalanceCardProps> = ({
    balance,
    percentChange,
    isPositive,
}) => {
    const [showBalance, setShowBalance] = useState<boolean>(true);
    const styles = useStyles(({ isDark, colors }) => ({
        balanceCard: {
            borderRadius: 15,
            padding: 15,
            marginVertical: 35,
        },
        balanceLabel: {
            color: isDark ? colors.coolGray[900] : colors.coolGray[50],
            fontSize: 18,
        },
        balanceValue: {
            color: isDark ? colors.coolGray[900] : colors.coolGray[50],
            fontSize: 30,
            fontFamily: 'Nunito-Bold',
        },
        balanceChange: {
            color: !showBalance
                ? isDark
                    ? colors.coolGray[50]
                    : colors.gray[900]
                : isPositive
                    ? colors.green[500]
                    : colors.red[400],
            fontSize: 16,
            fontFamily: 'Nunito-Bold',
        },
        settingsButton: {
            backgroundColor: isDark ? colors.coolGray[900] : colors.coolGray[100],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            paddingVertical: 5,
            paddingHorizontal: 15,
            zIndex: 10,
        },
        settingsIcon: {
            color: colors.coolGray[50],
            size: 20,
        },
        balanceIcon: {
            color: isPositive ? colors.green[500] : colors.red[400],
            size: 20,
        },
        balanceContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 3,
            paddingHorizontal: 5,
            marginBottom: 10,
            borderRadius: 7,
            backgroundColor: isDark ? colors.gray[900] : colors.coolGray[50],
        },
        mainContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        balanceInfoContainer: {
            alignItems: 'center',
            justifyContent: 'center',
        },
    }));

    return (
        <GradientBackground
            style={styles.balanceCard}
            isBlackOrWhite
        >
            <View style={styles.mainContainer}>
                <View>
                    <GradientText
                        text="Balance General"
                        style={styles.balanceLabel}
                        color={styles.balanceLabel.color}
                    />
                    <Text style={styles.balanceValue}>
                        {showBalance ? balance : '****'}
                    </Text>
                </View>
                <View style={styles.balanceInfoContainer}>
                    <View style={styles.balanceContainer}>
                        {showBalance && (<Icon
                            name={isPositive ? 'arrow-up' : 'arrow-down'}
                            size={styles.balanceIcon.size}
                            color={styles.balanceIcon.color}
                        />)}
                        <Text style={styles.balanceChange}>
                            {showBalance ? percentChange : '****'}
                        </Text>
                    </View>
                    <GradientButton
                        gradientStyle={styles.settingsButton}
                        onPress={() => setShowBalance((prev) => !prev)}
                    >
                        <Icon
                            name={showBalance ? 'eye-off' : 'eye'}
                            size={styles.settingsIcon.size}
                            color={styles.settingsIcon.color}
                        />
                    </GradientButton>
                </View>
            </View>
        </GradientBackground>
    );
};
