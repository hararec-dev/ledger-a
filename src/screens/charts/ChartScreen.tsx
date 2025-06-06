import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { DraggableGrid } from '../../components';

type ChartWidget = {
    id: string;
    title: string;
};

const initialWidgets: ChartWidget[] = [
    { id: 'w1', title: 'Ventas' },
    { id: 'w2', title: 'Usuarios' },
    { id: 'w3', title: 'Ingresos' },
    { id: 'w4', title: 'Conversión' },
    { id: 'w5', title: 'Retención' },
    { id: 'w6', title: 'Churn' },
];

export const ChartsScreen: React.FC = () => {
    const [widgets] = useState(initialWidgets);

    // Convert ChartWidget to DraggableItem
    const items = widgets.map((w) => ({
        key: w.id,
        component: (
            <View style={styles.widgetContainer}>
                <Text style={styles.widgetTitle}>{w.title}</Text>
                {/* Aquí puedes incrustar gráficos, tablas o KPI */}
            </View>
        ),
    }));

    // Calculate item size as one-third of screen width minus padding
    const numColumns = 4;
    const spacing = 5;
    const itemSize = (Dimensions.get('window').width - spacing * (numColumns + 1)) / numColumns;

    return (
        <View style={styles.screen}>
            <Text style={styles.heading}>Panel de Reportes</Text>
            <DraggableGrid
                items={items}
                numColumns={numColumns}
                itemSize={itemSize}
                containerStyle={{ padding: spacing }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
    },
    widgetContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    widgetTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
});
