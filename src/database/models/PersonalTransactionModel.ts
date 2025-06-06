import { Model } from '@nozbe/watermelondb';
import { relation, field, date, readonly, text, children } from '@nozbe/watermelondb/decorators';
import type { PersonalAccountModel } from './PersonalAccountModel';
import type { PersonalCategoryModel } from './PersonalCategoryModel';
import type { EventStoreModel } from './EventStoreModel';
import type { SnapshotModel } from './SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class PersonalTransactionModel extends Model {
    static table = 'personal_transactions';
    static associations: Associations = {
        accounts: { type: 'belongs_to', key: 'account_id' },
        categories: { type: 'belongs_to', key: 'category_id' },
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @field('amount') amount!: number;
    @text('type') type!: string;
    @date('date_at') dateAt!: Date;
    @text('description') description?: string;
    @field('is_recurring') isRecurring!: boolean;
    @relation('accounts', 'account_id') account!: PersonalAccountModel;
    @relation('categories', 'category_id') category?: PersonalCategoryModel;
    @readonly @date('created_at') createdAt!: Date;
    @readonly @date('updated_at') updatedAt!: Date;
}
