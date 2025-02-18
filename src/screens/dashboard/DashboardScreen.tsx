import { StatusBar, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@react-native-vector-icons/material-design-icons';
import { CartesianPlaneChart } from '../../components';

export const DashboardScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
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
