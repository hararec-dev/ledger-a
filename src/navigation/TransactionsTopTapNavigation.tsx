import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SpeedDialButton } from '../components';
import { useTransactionsTopTabNavigation } from '../hooks';
import type { TransactionsTabParamList } from '../types';

const Tab = createMaterialTopTabNavigator<TransactionsTabParamList>();

export const TransactionsTopTapNavigation: React.FC = () => {
    const [open, setOpen] = useState(false);
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
            <SpeedDialButton
                isOpen={open}
                toggleOpen={() => setOpen(!open)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
