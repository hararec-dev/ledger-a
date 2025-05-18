import { View, Text, TouchableOpacity } from 'react-native';
import { GradientBackground, Icon } from '../../components';
import { useCurrentStatusAppStore, useStyles } from '../../hooks';
import type { BalanceCardProps } from '../../types';


export const BalanceCard: React.FC<BalanceCardProps> = ({
    balance,
    percentChange,
    isPositive,
}) => {
    const { isBalanceVisibleOnDashboard, setIsBalanceVisibleOnDashboard } = useCurrentStatusAppStore();
    const styles = useStyles(({ isDark, colors, fonts }) => ({
        balanceCard: {
            borderRadius: 15,
            padding: 15,
            marginVertical: 35,
        },
        balanceLabel: {
            color: isDark ? colors.coolGray[900] : colors.coolGray[50],
            fontSize: 18,
            fontFamily: fonts.quicksand.bold,
            opacity: 0.8,
        },
        balanceValue: {
            color: isDark ? colors.coolGray[900] : colors.coolGray[50],
            fontSize: 30,
            fontFamily: fonts.nunito.bold,
        },
        balanceChange: {
            color: !isBalanceVisibleOnDashboard
                ? isDark
                    ? colors.coolGray[50]
                    : colors.gray[900]
                : isPositive
                    ? colors.green[500]
                    : colors.red[400],
            fontSize: 16,
            fontFamily: fonts.nunito.bold,
        },
        settingsButton: {
            backgroundColor: isDark ? colors.coolGray[900] : colors.coolGray[100],
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            paddingVertical: 5,
            paddingHorizontal: 18,
            zIndex: 10,
        },
        settingsIcon: {
            color: isDark ? colors.coolGray[50] : colors.gray[900],
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
            alignItems: 'flex-end',
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
                    <Text style={styles.balanceLabel}>Balance General</Text>
                    <Text style={styles.balanceValue}>
                        {isBalanceVisibleOnDashboard ? balance : '****'}
                    </Text>
                </View>
                <View style={styles.balanceInfoContainer}>
                    <View style={styles.balanceContainer}>
                        {isBalanceVisibleOnDashboard && (<Icon
                            name={isPositive ? 'arrow-up' : 'arrow-down'}
                            size={styles.balanceIcon.size}
                            color={styles.balanceIcon.color}
                        />)}
                        <Text style={styles.balanceChange}>
                            {isBalanceVisibleOnDashboard ? percentChange : '****'}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.settingsButton}
                        onPress={() => setIsBalanceVisibleOnDashboard(!isBalanceVisibleOnDashboard)}
                    >
                        <Icon
                            name={isBalanceVisibleOnDashboard ? 'eye-off' : 'eye'}
                            size={styles.settingsIcon.size}
                            color={styles.settingsIcon.color}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </GradientBackground>
    );
};
