import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar, type DateData } from 'react-native-calendars';
import { TransactionSummaryHeader } from '@components/transactions/TransactionSummaryHeader';
import { TransactionDetailsList } from '@components/transactions/TransactionDetailsList';
import { configureCalendarLocale } from '@config';
import { getMarkedDates, calculateTransactionSummary } from '@helpers';
import type { TransactionCalendarProps } from '@types';
import { Overlay } from '@rneui/themed';

export const TransactionCalendarScreen: React.FC<TransactionCalendarProps> = ({
    transactions = [
        {
            id: '1',
            date: '2025-03-06',
            type: 'income',
            amount: 45,
            description: 'Ventas',
            category: 'Dinero extra',
            method: 'Efectivo',
        },
        {
            id: '2',
            date: '2025-03-06',
            type: 'transfer',
            amount: 50,
            description: 'Mi nota',
            category: 'Transferencia',
            method: 'Efectivo',
        },
        {
            id: '3',
            date: '2025-03-06',
            type: 'expense',
            amount: 120,
            description: 'Compras supermercado',
            category: 'Alimentación',
            method: 'Tarjeta',
        },
        {
            id: '4',
            date: '2025-03-06',
            type: 'income',
            amount: 1500,
            description: 'Salario',
            category: 'Trabajo',
            method: 'Transferencia',
        },
        {
            id: '5',
            date: '2025-03-06',
            type: 'expense',
            amount: 45,
            description: 'Gasolina',
            category: 'Transporte',
            method: 'Efectivo',
        },
        {
            id: '6',
            date: '2025-03-06',
            type: 'expense',
            amount: 200,
            description: 'Ropa',
            category: 'Compras',
            method: 'Tarjeta',
        },
        {
            id: '7',
            date: '2025-03-06',
            type: 'income',
            amount: 300,
            description: 'Freelance',
            category: 'Trabajo',
            method: 'Transferencia',
        },
        {
            id: '8',
            date: '2025-03-06',
            type: 'expense',
            amount: 80,
            description: 'Internet',
            category: 'Servicios',
            method: 'Débito automático',
        },
        {
            id: '9',
            date: '2025-03-06',
            type: 'transfer',
            amount: 150,
            description: 'Préstamo amigo',
            category: 'Transferencia',
            method: 'Transferencia',
        },
        {
            id: '10',
            date: '2025-03-06',
            type: 'expense',
            amount: 60,
            description: 'Cena',
            category: 'Alimentación',
            method: 'Tarjeta',
        },
        {
            id: '11',
            date: '2025-03-06',
            type: 'income',
            amount: 250,
            description: 'Venta online',
            category: 'Negocio',
            method: 'Transferencia',
        },
        {
            id: '12',
            date: '2025-03-06',
            type: 'expense',
            amount: 40,
            description: 'Farmacia',
            category: 'Salud',
            method: 'Efectivo',
        },
        {
            id: '13',
            date: '2025-03-06',
            type: 'expense',
            amount: 90,
            description: 'Gym',
            category: 'Deportes',
            method: 'Débito automático',
        },
        {
            id: '14',
            date: '2025-03-06',
            type: 'income',
            amount: 180,
            description: 'Reembolso',
            category: 'Otros',
            method: 'Transferencia',
        },
        {
            id: '15',
            date: '2025-03-19',
            type: 'expense',
            amount: 35,
            description: 'Libros',
            category: 'Educación',
            method: 'Tarjeta',
        },
        {
            id: '16',
            date: '2025-03-20',
            type: 'transfer',
            amount: 100,
            description: 'Ahorro',
            category: 'Transferencia',
            method: 'Transferencia',
        },
        {
            id: '17',
            date: '2025-03-21',
            type: 'expense',
            amount: 70,
            description: 'Teléfono',
            category: 'Servicios',
            method: 'Débito automático',
        },
    ],
}) => {
    useEffect(() => {
        configureCalendarLocale();
    }, []);

    const [selectedDate, setSelectedDate] = useState<string>('');
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [currentMonth, setCurrentMonth] = useState<string>(new Date().toISOString().slice(0, 7));

    const markedDates = {
        ...getMarkedDates(transactions),
        ...(selectedDate && {
            [selectedDate]: {
                ...(getMarkedDates(transactions)[selectedDate] || {}),
                selected: true,
                selectedColor: '#fff',
                selectedTextColor: '#2196f3',
            },
        }),
    };

    const filteredTransactions = transactions.filter(
        tx => tx.date === selectedDate
    );

    const { income, expenses, balance } = calculateTransactionSummary(filteredTransactions);

    return (
        <View style={styles.container}>
            <Calendar
                markedDates={markedDates}
                current={currentMonth}
                onMonthChange={(month: DateData) => setCurrentMonth(month.dateString.slice(0, 7))}
                firstDay={1}
                onDayPress={(day: { dateString: string }) => {
                    setSelectedDate(day.dateString);
                    setShowDetails(true);
                }}
                theme={{
                    backgroundColor: '#222',
                    calendarBackground: '#222',
                    dayTextColor: '#fff',
                    monthTextColor: '#fff',
                    todayTextColor: '#2196f3',
                    selectedDayBackgroundColor: '#fff',
                    selectedDayTextColor: '#2196f3',
                    arrowColor: '#fff',
                    textDisabledColor: '#555',
                }}
                style={styles.calendar}
            />

            <TransactionSummaryHeader
                income={income}
                expenses={expenses}
                balance={balance}
            />

            <Overlay
                isVisible={showDetails && !!selectedDate}
                onBackdropPress={() => setShowDetails(false)}
                overlayStyle={{
                    backgroundColor: '#222',
                    borderRadius: 16,
                    width: '90%',
                    maxHeight: 300,
                    padding: 0,
                    justifyContent: 'flex-start',
                    alignItems: 'stretch',
                }}
            >
                <TransactionDetailsList
                    transactions={filteredTransactions}
                    selectedDate={selectedDate}
                />
            </Overlay>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
    calendar: {
        backgroundColor: '#222',
        borderBottomWidth: 1,
        borderColor: '#333',
    },
    fab: {
        position: 'absolute',
        right: 24,
        bottom: 24,
        backgroundColor: '#ff7043',
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    fabText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
});
