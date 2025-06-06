import { ScrollView, StyleSheet } from 'react-native';
import { PieFinancialChart } from '../../components/charts/pie/PieFinancialChart';


export const AccountsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <PieFinancialChart
                data={[
                    { name: 'Gasto', amount: 8000, color: '#19d4f7', legendFontColor: '#fff', legendFontSize: 13 },
                    { name: 'Inversión', amount: 2000, color: '#b97bce', legendFontColor: '#fff', legendFontSize: 13 },
                    { name: 'Diezmo', amount: 400, color: '#d600c7', legendFontColor: '#fff', legendFontSize: 13 },
                    { name: 'Ayuda', amount: 250, color: '#c23b6f', legendFontColor: '#fff', legendFontSize: 13 },
                    { name: 'Ajuste', amount: 69, color: '#bdbdbd', legendFontColor: '#fff', legendFontSize: 13 },
                ]}
                total={10719}
            />
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    box1: {
        backgroundColor: '#5856D6',
        flex: 1,
    },
    box2: {
        backgroundColor: '#4240a2',
        flex: 2,
    },
    box3: {
        backgroundColor: '#2e2d71',
        flex: 3,
    },
});
