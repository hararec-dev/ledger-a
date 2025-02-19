import { StatusBar, View, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@react-native-vector-icons/material-design-icons';
import { CartesianPlaneChart } from '../../components';
import { useAppTheme } from '../../hooks';

export const DashboardScreen = () => {
    const { isDark, colors, setTheme } = useAppTheme();

    return (
        <SafeAreaView style={{ backgroundColor: colors.background }}>
            <StatusBar
                barStyle={isDark ? 'light-content' : 'dark-content'}
                backgroundColor={colors.background}
            />
            <TouchableOpacity
                onPress={() => setTheme(isDark ? 'light' : 'dark')}
                style={{
                    position: 'absolute',
                    top: '120%',
                    left: 10,
                    zIndex: 1,
                    padding: 10,
                    backgroundColor: colors.accent,
                    borderRadius: 25,
                    marginBottom: 10,
                }}>
                <Icon
                    name={isDark ? "white-balance-sunny" : "weather-night"}
                    size={24}
                    color={colors.background}
                />
            </TouchableOpacity>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{ backgroundColor: colors.background }}
            >
                <View
                    style={{
                        backgroundColor: isDark ? Colors.black : Colors.white,
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
                    <Icon name="git" size={30} color="#900" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
