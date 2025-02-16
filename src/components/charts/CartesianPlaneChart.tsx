import { Dimensions, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { CartesianPlaneChartProps } from "../../types";


export const CartesianPlaneChart: React.FC<CartesianPlaneChartProps> = ({
    data,
    height = 220,
    yAxisLabel = "$",
    yAxisSuffix = "k",
    title = "Bezier Line Chart",
    chartConfig
}) => {
    const defaultChartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    };

    const chartData = {
        labels: data.map(point => point.label),
        datasets: [{
            data: data.map(point => point.value)
        }]
    };

    return (
        <View>
            <Text>{title}</Text>
            <LineChart
                data={chartData}
                width={Dimensions.get("window").width}
                height={height}
                yAxisLabel={yAxisLabel}
                yAxisSuffix={yAxisSuffix}
                yAxisInterval={1}
                chartConfig={{
                    ...defaultChartConfig,
                    ...chartConfig
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    );
};