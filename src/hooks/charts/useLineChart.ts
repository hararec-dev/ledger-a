import { useCallback } from 'react';
import type { ChartConfig } from 'react-native-chart-kit/dist/HelperTypes';
import type { ChartDataParams } from '@types';
import { LineChartData } from 'react-native-chart-kit/dist/line-chart/LineChart';


export const useLineChart = () => {

    const getData = useCallback(({ labels, datasets, legends }: ChartDataParams): LineChartData => ({
        labels,
        datasets: datasets.map(ds => ({
            ...ds,
            color: ds.color ?? ((opacity = 1) => `rgba(255,255,255,${opacity})`),
            strokeWidth: ds.strokeWidth ?? 2,
        })),
        legend: legends,
    }), []);

    const getChartConfig = useCallback((
        chartConfigOverrides: Partial<ChartConfig> = {}
    ): ChartConfig => ({
        backgroundGradientFrom: '#181A20',
        backgroundGradientTo: '#181A20',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
        labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
        propsForDots: {
            r: '2',
            strokeWidth: '2',
            stroke: '#181A20',
        },
        propsForBackgroundLines: {
            stroke: '#444',
            strokeDasharray: '4',
        },
        ...chartConfigOverrides,
    }), []);

    return {
        getData,
        getChartConfig,
    };
};
