import type { Model, Q } from '@nozbe/watermelondb';
import * as DatabaseModels from '../../database';

export type ModelTypeMap = {
    'personal_accounts': DatabaseModels.PersonalAccountModel & Model;
    'personal_achievements': DatabaseModels.PersonalAchievementModel & Model;
    'personal_auto_category_rules': DatabaseModels.PersonalAutoCategoryRuleModel & Model;
    'personal_budgets': DatabaseModels.PersonalBudgetModel & Model;
    'personal_categories': DatabaseModels.PersonalCategoryModel & Model;
    'personal_challenges': DatabaseModels.PersonalChallengeModel & Model;
    'personal_connected_banks': DatabaseModels.PersonalConnectedBankModel & Model;
    'personal_recurring_payments': DatabaseModels.PersonalRecurringPaymentModel & Model;
    'personal_subscriptions': DatabaseModels.PersonalSubscription & Model;
    'personal_transactions': DatabaseModels.PersonalTransactionModel & Model;
    'personal_transaction_tags': DatabaseModels.PersonalTransactionTagModel & Model;
    'personal_transfers': DatabaseModels.PersonalTransferModel & Model;
    'settings': DatabaseModels.SettingModel & Model;
    'tags': DatabaseModels.TagModel & Model;
    'events_store': DatabaseModels.EventStoreModel & Model;
    'snapshots': DatabaseModels.SnapshotModel & Model;
    'exchange_rates': DatabaseModels.ExchangeRateModel & Model;
};

export interface DatabaseQueryOptions<N extends keyof ModelTypeMap> {
    table: N;
    clauses: Q.Clause[];
}

export interface RecordIdentifier<N extends keyof ModelTypeMap> {
    table: N;
    id: string;
}

export interface DatabaseOperationResponse<N extends keyof ModelTypeMap> {
    success: boolean;
    record: ModelTypeMap[N] | null;
}

export interface RecordCreationData<N extends keyof ModelTypeMap> {
    table: N;
    data: Partial<ModelTypeMap[N]>;
}

export interface RecordUpdateData<N extends keyof ModelTypeMap> {
    table: N;
    id: string;
    data: Partial<ModelTypeMap[N]>;
}

export interface DatabaseUpdateResponse<N extends keyof ModelTypeMap> {
    success: boolean;
    updatedRecord: ModelTypeMap[N] | null;
}

export interface RecordDeletionData<N extends keyof ModelTypeMap> {
    table: N;
    id: string;
}

export interface DatabaseDeletionResponse<N extends keyof ModelTypeMap> {
    success: boolean;
    deletedRecord: ModelTypeMap[N] | null;
}

export type OperationType = 'create' | 'readOne' | 'readMany' | 'update' | 'delete';

export interface BatchOperation<N extends keyof ModelTypeMap> {
    type: OperationType;
    table: N;
    data?: Partial<ModelTypeMap[N]>;
    id?: string;
    clauses?: Q.Clause[];
}

export interface BatchOperationResponse<N extends keyof ModelTypeMap> {
    success: boolean;
    result: ModelTypeMap[N] | ModelTypeMap[N][] | null;
}
