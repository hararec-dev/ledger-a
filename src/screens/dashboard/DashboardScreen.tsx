import { TouchableOpacity, View, ScrollView } from 'react-native';
import { useLineChart, useThemeStore } from '../../hooks';
import { generateExcelFile } from '../../helpers';
import { Icon, LineFinancialChart } from '../../components';


export const DashboardScreen = () => {
    const { isDark, colors, setTheme } = useThemeStore();
    const { getChartConfig, getData } = useLineChart();
    const chartConfig = getChartConfig({
        backgroundGradientFrom: '#111827',
        backgroundGradientTo: '#111827',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
        labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
        propsForDots: {
            r: '2',
            strokeWidth: '2',
            stroke: '#111827',
        },
        propsForBackgroundLines: {
            stroke: '#374151',
            strokeDasharray: '4',
        },
    });
    const data = getData({
        labels: ['Semana 5', '', 'Semana 9', '', 'Semana 13', ''],
        datasets: [
            {
                data: [0, 2000, 5000, 7000, 9500, 11000],
                color: () => '#FF6EC7', // Rosa: Periodo previo
                strokeWidth: 2,
            },
            {
                data: [0, 1000, 3000, 6000, 8500, 10000],
                color: () => '#3399FF', // Azul: Periodo actual
                strokeWidth: 2,
            },
            {
                data: [0, 800, 2500, 5000, 7500, 9500],
                color: () => '#FFD700', // Amarillo: Mismo periodo año pasado
                strokeWidth: 2,
            },
        ],
        legends: [
            'Periodo actual',
            'Periodo previo',
            'Mismo periodo del año pasado',
        ],
    });

    const handleGenerateExcel = async () => {
        try {
            const sampleData = [
                { Month: 'January', Revenue: Math.random() * 100 },
                { Month: 'February', Revenue: Math.random() * 100 },
            ];
            await generateExcelFile(sampleData, 'financial_report.xlsx');
        } catch (error) { }
    };

    return (
        <View>
            <TouchableOpacity
                onPress={() => setTheme(isDark ? 'light' : 'dark')}
                style={{
                    position: 'absolute',
                    top: '120%',
                    left: 10,
                    zIndex: 1,
                    padding: 10,
                    backgroundColor: isDark ? colors.coolGray[50] : colors.warmGray[900],
                    borderRadius: 25,
                    marginBottom: 10,
                }}>
                <Icon
                    name={isDark ? 'sunny-outline' : 'moon-outline'}
                    size={30}
                    color={colors.cyan[500]}
                />
            </TouchableOpacity>

            {/* Add new Excel button */}
            <TouchableOpacity
                onPress={handleGenerateExcel}
                style={{
                    position: 'absolute',
                    top: '120%',
                    left: 70,  // Adjusted position to avoid overlapping
                    zIndex: 1,
                    padding: 10,
                    backgroundColor: isDark ? colors.coolGray[50] : colors.warmGray[900],
                    borderRadius: 25,
                    marginBottom: 10,
                }}>
                <Icon
                    name="document-outline"
                    size={30}
                    color={colors.cyan[500]}
                />
            </TouchableOpacity>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{ backgroundColor: colors.purple[500] }}
            >
                <View
                    style={{
                        backgroundColor: '#212121',
                    }}>
                    <LineFinancialChart
                        data={data}
                        chartConfig={chartConfig}
                    />
                </View>
            </ScrollView>
        </View>
    );
};
