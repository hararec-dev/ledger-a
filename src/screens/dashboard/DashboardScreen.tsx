import { StatusBar, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartesianPlaneChart, CustomIcon } from '../../components';
import { useThemeStore } from '../../hooks';

export const DashboardScreen = () => {
    const { isDark, colors, setTheme } = useThemeStore();

    return (
        <SafeAreaView style={{ backgroundColor: isDark ? colors.warmGray[900] : colors.coolGray[50] }}>
            <StatusBar
                barStyle={isDark ? 'light-content' : 'dark-content'}
                backgroundColor={colors.cyan[500]}
            />
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
                <CustomIcon
                    name={isDark ? "white-balance-sunny" : "weather-night"}
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
                            label: "January"
                        },
                        {
                            value: Math.random() * 100,
                            label: "February"
                        },
                        {
                            value: Math.random() * 100,
                            label: "March"
                        },
                        {
                            value: Math.random() * 100,
                            label: "April"
                        },
                        {
                            value: Math.random() * 100,
                            label: "May"
                        },
                        {
                            value: Math.random() * 100,
                            label: "June"
                        }
                    ]} />
                    {/* <Icon name="git" size={30} color="#900" /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
