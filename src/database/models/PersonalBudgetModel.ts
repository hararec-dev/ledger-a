import { Model } from '@nozbe/watermelondb';
import { field, relation, date, readonly, text, children } from '@nozbe/watermelondb/decorators';
import type { PersonalCategoryModel } from '@database/models/PersonalCategoryModel';
import type { PersonalAccountModel } from '@database/models/PersonalAccountModel';
import type { EventStoreModel } from '@database/models/EventStoreModel';
import type { SnapshotModel } from '@database/models/SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class PersonalBudgetModel extends Model {
    static table = 'personal_budgets';
    static associations: Associations = {
        categories: { type: 'belongs_to', key: 'category_id' },
        accounts: { type: 'belongs_to', key: 'account_id' },
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @relation('categories', 'category_id') category?: PersonalCategoryModel;
    @relation('accounts', 'account_id') account?: PersonalAccountModel;
    @field('amount') amount!: number;
    @text('period') period!: string;
    @date('start_date_at') startDate!: Date;
    @date('end_date_at') endDate!: Date;
    @field('alert_threshold') alertThreshold!: number;
    @field('spent_amount') spentAmount!: number;
    @field('position_on_screen') positionOnScreen!: number;
    @readonly @date('created_at') createdAt!: Date;
}
