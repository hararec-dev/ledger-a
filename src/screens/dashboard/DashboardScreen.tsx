import { TouchableOpacity, View, ScrollView } from 'react-native';
import { CartesianPlaneChart, IonIcon } from '../../components';
import { useThemeStore } from '../../hooks';
import { generateExcelFile } from '../../helpers';

export const DashboardScreen = () => {
    const { isDark, colors, setTheme } = useThemeStore();

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
                <IonIcon
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
                <IonIcon
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
                    <CartesianPlaneChart data={[
                        {
                            value: Math.random() * 100,
                            label: 'January',
                        },
                        {
                            value: Math.random() * 100,
                            label: 'February',
                        },
                        {
                            value: Math.random() * 100,
                            label: 'March',
                        },
                        {
                            value: Math.random() * 100,
                            label: 'April',
                        },
                        {
                            value: Math.random() * 100,
                            label: 'May',
                        },
                        {
                            value: Math.random() * 100,
                            label: 'June',
                        },
                    ]} />
                    {/* <Icon name="git" size={30} color="#900" /> */}
                </View>
            </ScrollView>
        </View>
    );
};
