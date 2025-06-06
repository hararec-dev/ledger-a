import { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accordion } from '@components';
import type { AccordionSection, MonthSection } from '@types';

const MOCK_DATA: MonthSection[] = [
    {
        month: 'mar.',
        range: '3.1 ~ 3.31',
        income: 0,
        expense: 0,
        weeks: [
            { period: '30.03 ~ 05.04', income: 0, expense: 0 },
            { period: '23.03 ~ 29.03', income: 0, expense: 0 },
            { period: '16.03 ~ 22.03', income: 0, expense: 0 },
            { period: '09.03 ~ 15.03', income: 0, expense: 0 },
            { period: '02.03 ~ 08.03', income: 0, expense: 0, balance: 0, highlighted: true },
            { period: '23.02 ~ 01.03', income: 0, expense: 0 },
        ],
    },
    {
        month: 'feb.',
        range: '',
        income: 0,
        expense: 0,
        weeks: [],
    },
    {
        month: 'ene.',
        range: '',
        income: 0,
        expense: 0,
        weeks: [],
    },
];


export const MonthlyTransactionsScreen: React.FC = () => {
    const [openMonthIndex, setOpenMonthIndex] = useState<number | null>(null);

    const getAccordionSections = useCallback((months: MonthSection[]): AccordionSection[] =>
        months.map((month, idx) => ({
            key: month.month + idx,
            title: `${month.month}   $${month.income.toFixed(2)}   $${month.expense.toFixed(2)}`,
            content: month.weeks.length > 0 ? (
                <View>
                    {month.range ? (
                        <Text style={styles.monthRange}>{month.range}</Text>
                    ) : null}
                    {month.weeks.map((week, widx) => (
                        <View
                            key={week.period + widx}
                            style={[
                                styles.weekRow,
                                week.highlighted ? styles.weekHighlighted : undefined,
                            ]}
                        >
                            <Text style={styles.weekPeriod}>{week.period}</Text>
                            <Text style={styles.amountIncome}>$ {week.income.toFixed(2)}</Text>
                            <Text style={styles.amountExpense}>$ {week.expense.toFixed(2)}</Text>
                            {week.balance !== undefined ? (
                                <Text style={styles.balanceText}>
                                    Balance $ {week.balance.toFixed(2)}
                                </Text>
                            ) : null}
                        </View>
                    ))}
                </View>
            ) : null,
        })), []);

    return (
        <View style={styles.container}>
            <Accordion
                sections={getAccordionSections(MOCK_DATA)}
                activeSection={openMonthIndex}
                onSectionPress={setOpenMonthIndex}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181A20',
    },
    monthRange: {
        color: '#A3A3A3',
        fontSize: 12,
        marginLeft: 16,
        marginBottom: 4,
    },
    weekRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#23262F',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#1F2128',
    },
    weekHighlighted: {
        backgroundColor: '#6B2A2A',
    },
    weekPeriod: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    amountIncome: {
        color: '#0090FF',
        fontSize: 16,
        marginLeft: 8,
    },
    amountExpense: {
        color: '#FF3B30',
        fontSize: 16,
        marginLeft: 8,
    },
    balanceText: {
        color: '#A3A3A3',
        fontSize: 12,
        marginLeft: 8,
    },
});
