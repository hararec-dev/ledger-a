import { View } from 'react-native';
import { BalanceCard, DashboardTransactionsList, QuickActions } from '../../components';
import { useStyles } from '../../hooks';
import type { IconType } from '../../types';

interface CryptoHolding {
    name: string;
    symbol: string;
    icon: {
        name: string;
        iconType: IconType;
    };
    color: string;
    value: string;
    amount: string;
    chartColor: string;
    chartData: number[];
}

const CRYPTO_HOLDINGS: CryptoHolding[] = [
    {
        name: 'Ethereum',
        symbol: 'ETH',
        icon: { name: 'ethereum', iconType: 'material_community_icon' },
        color: '#fff',
        value: '$503.12',
        amount: '50 ETH',
        chartColor: '#00FFB3',
        chartData: [2, 2.2, 2.1, 2.3, 2.5, 2.4, 2.6],
    },
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        icon: { name: 'bitcoin', iconType: 'material_community_icon' },
        color: '#fff',
        value: '$26927',
        amount: '2.05 BTC',
        chartColor: '#FF6C6C',
        chartData: [1.5, 1.7, 1.6, 1.8, 1.7, 1.6, 1.5],
    },
    {
        name: 'Litecoin',
        symbol: 'LTC',
        icon: { name: 'litecoin', iconType: 'material_community_icon' },
        color: '#fff',
        value: '$6927',
        amount: '2.05 LTC',
        chartColor: '#00FFB3',
        chartData: [1, 1.2, 1.1, 1.3, 1.2, 1.4, 1.3],
    },
    {
        name: 'Ripple',
        symbol: 'XRP',
        icon: { name: 'swap-horizontal', iconType: 'material_community_icon' },
        color: '#fff',
        value: '$4637',
        amount: '2.05 LTC',
        chartColor: '#00FFB3',
        chartData: [0.8, 0.9, 1, 1.1, 1, 1.2, 1.1],
    },
    {
        name: 'Cardano',
        symbol: 'ADA',
        icon: { name: 'alpha-a-circle', iconType: 'material_community_icon' },
        color: '#fff',
        value: '$1200',
        amount: '1000 ADA',
        chartColor: '#4E44CE',
        chartData: [0.5, 0.6, 0.7, 0.65, 0.7, 0.75, 0.8],
    },
    {
        name: 'Polkadot',
        symbol: 'DOT',
        icon: { name: 'alpha-d-circle', iconType: 'material_community_icon' },
        color: '#fff',
        value: '$950',
        amount: '300 DOT',
        chartColor: '#E6007A',
        chartData: [1.1, 1.2, 1.15, 1.18, 1.22, 1.25, 1.3],
    },
    {
        name: 'Solana',
        symbol: 'SOL',
        icon: { name: 'alpha-s-circle', iconType: 'material_community_icon' },
        color: '#fff',
        value: '$2100',
        amount: '150 SOL',
        chartColor: '#00FFA3',
        chartData: [2.5, 2.6, 2.7, 2.65, 2.8, 2.85, 2.9],
    },
    {
        name: 'Dogecoin',
        symbol: 'DOGE',
        icon: { name: 'dog', iconType: 'material_community_icon' },
        color: '#fff',
        value: '$350',
        amount: '5000 DOGE',
        chartColor: '#C2A633',
        chartData: [0.1, 0.12, 0.11, 0.13, 0.14, 0.13, 0.15],
    },
    {
        name: 'Binance Coin',
        symbol: 'BNB',
        icon: { name: 'alpha-b-circle', iconType: 'material_community_icon' },
        color: '#fff',
        value: '$320',
        amount: '10 BNB',
        chartColor: '#F3BA2F',
        chartData: [3.2, 3.3, 3.25, 3.4, 3.45, 3.5, 3.55],
    },
];

export const DashboardScreen = () => {
    const styles = useStyles(({ isDark, colors }) => ({
        container: {
            flex: 1,
            backgroundColor: isDark ? colors.gray[900] : colors.coolGray[50],
            paddingHorizontal: 16,
            paddingBottom: 16,
        },
    }));

    return (
        <View style={styles.container}>
            <BalanceCard
                balance="$1400000000000"
                percentChange="10.2%"
                isPositive={true}
            />
            <DashboardTransactionsList transactions={[...CRYPTO_HOLDINGS].sort(() => Math.random() - 0.5)} />
            <QuickActions />
        </View>
    );
};
