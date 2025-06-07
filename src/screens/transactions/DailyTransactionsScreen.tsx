import { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accordion } from '@components';
import type { AccordionSection, DayTransaction } from '@types';


const MOCK_DAILY_DATA: DayTransaction[] = [
    {
        date: '2025-03-21',
        income: 0,
        expense: 70,
        transactions: [
            {
                id: '17',
                description: 'Teléfono',
                type: 'expense',
                amount: 70,
                category: 'Servicios',
                method: 'Débito automático',
            },
        ],
    },
    {
        date: '2025-03-20',
        income: 0,
        expense: 0,
        transactions: [
            {
                id: '16',
                description: 'Ahorro',
                type: 'transfer',
                amount: 100,
                category: 'Transferencia',
                method: 'Transferencia',
            },
        ],
    },
    {
        date: '2025-03-06',
        income: 2275,
        expense: 675,
        transactions: [
            {
                id: '1',
                description: 'Ventas',
                type: 'income',
                amount: 45,
                category: 'Dinero extra',
                method: 'Efectivo',
            },
            {
                id: '2',
                description: 'Mi nota',
                type: 'transfer',
                amount: 50,
                category: 'Transferencia',
                method: 'Efectivo',
            },
            {
                id: '3',
                description: 'Compras supermercado',
                type: 'expense',
                amount: 120,
                category: 'Alimentación',
                method: 'Tarjeta',
            },
            {
                id: '4',
                description: 'Salario',
                type: 'income',
                amount: 1500,
                category: 'Trabajo',
                method: 'Transferencia',
            },
            {
                id: '5',
                description: 'Gasolina',
                type: 'expense',
                amount: 45,
                category: 'Transporte',
                method: 'Efectivo',
            },
            {
                id: '6',
                description: 'Ropa',
                type: 'expense',
                amount: 200,
                category: 'Compras',
                method: 'Tarjeta',
            },
            {
                id: '7',
                description: 'Freelance',
                type: 'income',
                amount: 300,
                category: 'Trabajo',
                method: 'Transferencia',
            },
            {
                id: '8',
                description: 'Internet',
                type: 'expense',
                amount: 80,
                category: 'Servicios',
                method: 'Débito automático',
            },
            {
                id: '9',
                description: 'Préstamo amigo',
                type: 'transfer',
                amount: 150,
                category: 'Transferencia',
                method: 'Transferencia',
            },
            {
                id: '10',
                description: 'Cena',
                type: 'expense',
                amount: 60,
                category: 'Alimentación',
                method: 'Tarjeta',
            },
            {
                id: '11',
                description: 'Venta online',
                type: 'income',
                amount: 250,
                category: 'Negocio',
                method: 'Transferencia',
            },
            {
                id: '12',
                description: 'Farmacia',
                type: 'expense',
                amount: 40,
                category: 'Salud',
                method: 'Efectivo',
            },
            {
                id: '13',
                description: 'Gym',
                type: 'expense',
                amount: 90,
                category: 'Deportes',
                method: 'Débito automático',
            },
            {
                id: '14',
                description: 'Reembolso',
                type: 'income',
                amount: 180,
                category: 'Otros',
                method: 'Transferencia',
            },
        ],
    },
    {
        date: '2025-03-19',
        income: 0,
        expense: 35,
        transactions: [
            {
                id: '15',
                description: 'Libros',
                type: 'expense',
                amount: 35,
                category: 'Educación',
                method: 'Tarjeta',
            },
        ],
    },
];

export const DailyTransactionsScreen: React.FC = () => {
    const [openDayIndex, setOpenDayIndex] = useState<number | null>(null);

    const getAccordionSections = useCallback(
        (days: DayTransaction[]): AccordionSection[] =>
            days.map((day, idx) => ({
                key: day.date + idx,
                title: `${day.date.split('-').reverse().join('/')}   $${day.income.toFixed(2)}   $${day.expense.toFixed(2)}`,
                content: (
                    <View>
                        {day.transactions.length > 0 ? (
                            day.transactions.map((tx) => (
                                <View key={tx.id} style={styles.transactionRow}>
                                    <Text style={styles.txDesc}>{tx.description}</Text>
                                    <Text
                                        style={[
                                            styles.txAmount,
                                            { color: tx.type === 'income' ? '#0090FF' : tx.type === 'expense' ? '#FF3B30' : '#A3A3A3' },
                                        ]}
                                    >
                                        {tx.type === 'income' ? '+' : tx.type === 'expense' ? '-' : ''}
                                        ${tx.amount.toFixed(2)}
                                    </Text>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.emptyText}>Sin transacciones</Text>
                        )}
                    </View>
                ),
            })),
        []
    );

    return (
        <View style={styles.container}>
            <Accordion
                sections={getAccordionSections(MOCK_DAILY_DATA)}
                activeSection={openDayIndex}
                onSectionPress={setOpenDayIndex}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A20',
    },
    transactionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#23262F',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#1F2128',
    },
    txDesc: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    txAmount: {
        fontSize: 16,
        marginLeft: 8,
        fontWeight: 'bold',
    },
    emptyText: {
        color: '#90caf9',
        fontStyle: 'italic',
        padding: 8,
    },
});
