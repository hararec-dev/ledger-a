import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SpeedDialButton } from '../components';
import { useTransactionsTopTabNavigation } from '../hooks';
import type { TransactionsTabParamList } from '../types';

const Tab = createMaterialTopTabNavigator<TransactionsTabParamList>();

export const TransactionsTopTapNavigation: React.FC = () => {
    const { screenOptions, tabRoutes } = useTransactionsTopTabNavigation();

    return (
        <View style={styles.container}>
            <Tab.Navigator screenOptions={screenOptions}>
                {tabRoutes.map((route) => (
                    <Tab.Screen
                        key={route.name}
                        name={route.name}
                        component={route.component}
                        options={route.options}
                    />
                ))}
            </Tab.Navigator>
            <SpeedDialButton/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
