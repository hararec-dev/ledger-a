import { Model } from '@nozbe/watermelondb';
import { field, relation, date, text, readonly, children } from '@nozbe/watermelondb/decorators';
import type { PersonalAccountModel } from './PersonalAccountModel';
import type { PersonalCategoryModel } from './PersonalCategoryModel';
import type { EventStoreModel } from './EventStoreModel';
import type { SnapshotModel } from './SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';

export class PersonalRecurringPaymentModel extends Model {
    static table = 'personal_recurring_payments';
    static associations: Associations = {
        accounts: { type: 'belongs_to', key: 'account_id' },
        categories: { type: 'belongs_to', key: 'category_id' },
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @relation('accounts', 'account_id') account!: PersonalAccountModel;
    @relation('categories', 'category_id') category?: PersonalCategoryModel;
    @field('amount') amount!: number;
    @text('type') type!: string;
    @text('description') description?: string;
    @text('recurrence') recurrence!: string;
    @date('due_date_at') dueDate!: Date;
    @field('is_active') isActive!: boolean;
    @field('position_on_screen') positionOnScreen!: number;
    @readonly @date('created_at') createdAt!: Date;
}
