import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { migrations } from '@database/config/migrations';
import { schema } from '@database/config/schema';
import {
    EventStoreModel,
    ExchangeRateModel,
    PersonalAccountModel,
    PersonalAchievementModel,
    PersonalAutoCategoryRuleModel,
    PersonalBudgetModel,
    PersonalCategoryModel,
    PersonalChallengeModel,
    PersonalConnectedBankModel,
    PersonalRecurringPaymentModel,
    PersonalSubscription,
    PersonalTransactionModel,
    PersonalTransactionTagModel,
    PersonalTransferModel,
    SettingModel,
    SnapshotModel,
    TagModel,
} from '@database/models';

const adapter = new SQLiteAdapter({
    schema,
    migrations,
    dbName: 'ledger_a',
    /* onSetUpError: error => {}, */
});

export const database = new Database({
    adapter,
    modelClasses: [
        EventStoreModel,
        ExchangeRateModel,
        PersonalAccountModel,
        PersonalAchievementModel,
        PersonalAutoCategoryRuleModel,
        PersonalBudgetModel,
        PersonalCategoryModel,
        PersonalChallengeModel,
        PersonalConnectedBankModel,
        PersonalRecurringPaymentModel,
        PersonalSubscription,
        PersonalTransactionModel,
        PersonalTransactionTagModel,
        PersonalTransferModel,
        SettingModel,
        SnapshotModel,
        TagModel,
    ],
});
