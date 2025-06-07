import { useStyles } from '@hooks';

export const useTransactionItemStyles = () => {
    return useStyles(({ isDark, colors, fonts }) => ({
        transactionRow: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: isDark ? colors.gray[900] : colors.coolGray[50],
            borderRadius: 15,
            padding: 5,
            marginBottom: 10,
        },
        transactionIcon: {
            borderRadius: 12,
            backgroundColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 7,
            color: '#fff',
        },
        transactionInfo: {
            flex: 1,
            marginLeft: 10,
        },
        transactionName: {
            color: isDark ? colors.coolGray[50] : colors.gray[900],
            fontFamily: fonts.quicksand.medium,
            fontSize: 16,
        },
        transactionSymbol: {
            color: isDark ? colors.coolGray[50] : colors.gray[900],
            fontFamily: fonts.nunito.regular,
            fontSize: 13,
            opacity: 0.7,
            marginTop: 2,
        },
        chartContainer: {
            width: 60,
            height: 32,
            justifyContent: 'center',
            overflow: 'hidden',
        },
        chart: {
            paddingRight: 0,
            paddingLeft: 0,
            color: isDark ? colors.gray[900] : colors.coolGray[50],
        },
        valueContainer: {
            alignItems: 'flex-end',
            marginLeft: 10,
        },
        transactionValue: {
            color: isDark ? colors.coolGray[50] : colors.gray[900],
            fontFamily: fonts.quicksand.bold,
            fontSize: 16,
        },
        transactionAmount: {
            color: isDark ? colors.coolGray[50] : colors.gray[900],
            fontFamily: fonts.nunito.regular,
            opacity: 0.8,
            fontSize: 12,
            marginTop: 2,
        },
    }));
};
