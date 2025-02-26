import { TouchableOpacity, View, ScrollView } from 'react-native';
import { CartesianPlaneChart, CustomIcon } from '../../components';
import { useThemeStore } from '../../hooks';

export const DashboardScreen = () => {
    const { isDark, colors, setTheme } = useThemeStore();

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
        </View>
    );
};
