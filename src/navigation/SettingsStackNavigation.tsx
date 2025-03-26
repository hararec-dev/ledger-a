import { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsStackParamList, SettingsStackRoute } from '../types';
import {
    AIAutomationScreen,
    BankSyncScreen,
    CategoriesScreen,
    CloudSyncScreen,
    CollaborativeScreen,
    CryptoScreen,
    EditCategoryScreen,
    ExportBackupScreen,
    PremiumScreen,
    SettingsScreen,
    SubscriptionScreen,
} from '../screens';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export const SettingsStackNavigation: React.FC = () => {
    const stackRoutes = useMemo<SettingsStackRoute[]>(() => ([
        {
            name: 'Settings',
            component: SettingsScreen,
            options: {
                title: 'Configuración',
                headerShown: true,
            },
        },
        {
            name: 'Categories',
            component: CategoriesScreen,
            options: {
                title: 'Categorías y Etiquetas',
                headerShown: true,
            },
        },
        {
            name: 'EditCategory',
            component: EditCategoryScreen,
            options: {
                title: 'Editar Categoría',
                headerShown: true,
            },
        },
        {
            name: 'ExportBackup',
            component: ExportBackupScreen,
            options: {
                title: 'Exportar y Backup',
                headerShown: true,
            },
        },
        {
            name: 'Premium',
            component: PremiumScreen,
            options: {
                title: 'Funciones Premium',
                headerShown: true,
            },
        },
        {
            name: 'BankSync',
            component: BankSyncScreen,
            options: {
                title: 'Sincronizar Bancos',
                headerShown: true,
            },
        },
        {
            name: 'Subscription',
            component: SubscriptionScreen,
            options: {
                title: 'Tarjetas y Suscripciones',
                headerShown: true,
            },
        },
        {
            name: 'CloudSync',
            component: CloudSyncScreen,
            options: {
                title: 'Sincronización en la Nube',
                headerShown: true,
            },
        },
        {
            name: 'AIAutomation',
            component: AIAutomationScreen,
            options: {
                title: 'Automatización con IA',
                headerShown: true,
            },
        },
        {
            name: 'Collaborative',
            component: CollaborativeScreen,
            options: {
                title: 'Modo Colaborativo',
                headerShown: true,
            },
        },
        {
            name: 'Crypto',
            component: CryptoScreen,
            options: {
                title: 'Criptomonedas y Divisas',
                headerShown: true,
            },
        },
    ]), []);

    return (
        <SettingsStack.Navigator>
            {stackRoutes.map((route) => (
                <SettingsStack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    options={{
                        ...route.options,
                        headerShown: false,
                    }}
                />
            ))}
        </SettingsStack.Navigator>
    );
};
