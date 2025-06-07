import * as DatabaseModels from '@database';


export interface DBComponentProps {
    pAccount: DatabaseModels.PersonalAccountModel;
    pAchievement: DatabaseModels.PersonalAchievementModel;
    pAutoRule: DatabaseModels.PersonalAutoCategoryRuleModel;
    pBudget: DatabaseModels.PersonalBudgetModel;
    pCategory: DatabaseModels.PersonalCategoryModel;
    pChallenge: DatabaseModels.PersonalChallengeModel;
    pBank: DatabaseModels.PersonalConnectedBankModel;
    pRecurring: DatabaseModels.PersonalRecurringPaymentModel;
    pSubscription: DatabaseModels.PersonalSubscription;
    pTransaction: DatabaseModels.PersonalTransactionModel;
    pTransTag: DatabaseModels.PersonalTransactionTagModel;
    pTransfer: DatabaseModels.PersonalTransferModel;
    setting: DatabaseModels.SettingModel;
    tag: DatabaseModels.TagModel;
    event: DatabaseModels.EventStoreModel;
    snapshot: DatabaseModels.SnapshotModel;
    rate: DatabaseModels.ExchangeRateModel;
    tags: DatabaseModels.TagModel[];
    pCategories: DatabaseModels.PersonalCategoryModel[];
    pAccounts: DatabaseModels.PersonalAccountModel[];
    pTransactions: DatabaseModels.PersonalTransactionModel[];
    pBudgets: DatabaseModels.PersonalBudgetModel[];
    pAchievements: DatabaseModels.PersonalAchievementModel[];
    pAutoRules: DatabaseModels.PersonalAutoCategoryRuleModel[];
    pChallenges: DatabaseModels.PersonalChallengeModel[];
    pBanks: DatabaseModels.PersonalConnectedBankModel[];
    pRecurrings: DatabaseModels.PersonalRecurringPaymentModel[];
    pSubscriptions: DatabaseModels.PersonalSubscription[];
    pTransTags: DatabaseModels.PersonalTransactionTagModel[];
    pTransfers: DatabaseModels.PersonalTransferModel[];
    settings: DatabaseModels.SettingModel[];
    events: DatabaseModels.EventStoreModel[];
    snapshots: DatabaseModels.SnapshotModel[];
    rates: DatabaseModels.ExchangeRateModel[];
}

export type DBComponent<T> = (Component: React.ComponentType<T>) => React.ComponentType<T>;

export type DBFunction<T> = (props: T) => T;

export type PickRequiredProps<T, K extends keyof T> = {
    [P in K]-?: T[P];
};
export type DBWrappedFunction<T> = (propsFn: DBFunction<T>, propsList: T[]) => DBComponent<T>;

export type SelectDBProps<K extends keyof DBComponentProps> = PickRequiredProps<DBComponentProps, K>;
