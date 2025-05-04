import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { AllRoutes, NavigationHierarchy, RouteParams, TypeLegalInfo, TypeSetup } from '../../types';

export const useAppNavigation = () => {
    const rootNavigation = useNavigation<NavigationHierarchy>();

    const navigateTo = useCallback(<RouteName extends AllRoutes>(
        route: RouteName,
        params?: RouteParams<RouteName>
    ) => {
        // @ts-expect-error
        rootNavigation.navigate(route, params);
    }, [rootNavigation]);

    const accountNavigations = {
        goToAccountDetails: useCallback((param?: string) =>
            navigateTo('AccountDetails', param ? { accountId: param } : undefined),
        [navigateTo]),
        goToAccounts: useCallback(() => navigateTo('Accounts'), [navigateTo]),
    };

    const authNavigations = {
        goToAuthentication: useCallback(() => navigateTo('Authentication'), [navigateTo]),
        goToLegalInfo: useCallback((param?: TypeLegalInfo) =>
            navigateTo('LegalInfo', param ? { typeInfo: param } : undefined),
        [navigateTo]),
    };

    const onboardingNavigations = {
        goToOnboardingSetup: useCallback((param?: TypeSetup) =>
            navigateTo('OnboardingSetup', param ? { typeSetup: param } : undefined),
        [navigateTo]),
        goToOnboardingSlides: useCallback(() => navigateTo('OnboardingSlides'), [navigateTo]),
    };

    const transactionNavigations = {
        goToAddTransaction: useCallback(() => navigateTo('AddTransaction'), [navigateTo]),
        goToTransactionDetails: useCallback((param?: string) =>
            navigateTo('TransactionDetails', param ? { transactionId: param } : undefined),
        [navigateTo]),
        goToTransactionList: useCallback(() => navigateTo('TransactionList'), [navigateTo]),
        goToTransfer: useCallback(() => navigateTo('Transfer'), [navigateTo]),
        goToQuickAdd: useCallback(() => navigateTo('QuickAdd'), [navigateTo]),
    };

    const noteNavigations = {
        goToAddNote: useCallback(() => navigateTo('AddNote'), [navigateTo]),
        goToNoteDetails: useCallback((param?: string) =>
            navigateTo('NoteDetails', param ? { noteId: param } : undefined),
        [navigateTo]),
        goToNotes: useCallback(() => navigateTo('Notes'), [navigateTo]),
        goToNotesList: useCallback(() => navigateTo('NotesList'), [navigateTo]),
    };

    const featureNavigations = {
        goToAIAutomation: useCallback(() => navigateTo('AIAutomation'), [navigateTo]),
        goToBankSync: useCallback(() => navigateTo('BankSync'), [navigateTo]),
        goToBudget: useCallback(() => navigateTo('Budget'), [navigateTo]),
        goToCharts: useCallback(() => navigateTo('Charts'), [navigateTo]),
        goToCloudSync: useCallback(() => navigateTo('CloudSync'), [navigateTo]),
        goToCollaborative: useCallback(() => navigateTo('Collaborative'), [navigateTo]),
        goToCrypto: useCallback(() => navigateTo('Crypto'), [navigateTo]),
    };

    const utilityNavigations = {
        goToCategories: useCallback(() => navigateTo('Categories'), [navigateTo]),
        goToEditCategory: useCallback(() => navigateTo('EditCategory'), [navigateTo]),
        goToColorSelection: useCallback(() => navigateTo('ColorSelection'), [navigateTo]),
        goToExportBackup: useCallback(() => navigateTo('ExportBackup'), [navigateTo]),
    };

    const settingsNavigations = {
        goToPremium: useCallback(() => navigateTo('Premium'), [navigateTo]),
        goToSettings: useCallback(() => navigateTo('Settings'), [navigateTo]),
        goToSubscription: useCallback(() => navigateTo('Subscription'), [navigateTo]),
    };

    const mainNavigations = {
        goToDashboard: useCallback(() => navigateTo('Dashboard'), [navigateTo]),
        goToMainNavigation: useCallback(() => navigateTo('MainNavigation'), [navigateTo]),
        goToUtilityStackNavigation: useCallback(() => navigateTo('UtilityStackNavigation'), [navigateTo]),
    };

    return {
        navigateTo,
        ...accountNavigations,
        ...authNavigations,
        ...onboardingNavigations,
        ...transactionNavigations,
        ...noteNavigations,
        ...featureNavigations,
        ...utilityNavigations,
        ...settingsNavigations,
        ...mainNavigations,
    };
};
