import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, text, children } from '@nozbe/watermelondb/decorators';
import type { SnapshotModel } from '@database/models/SnapshotModel';
import type { EventStoreModel } from '@database/models/EventStoreModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class PersonalAccountModel extends Model {
    static table = 'personal_accounts';
    static associations: Associations = {
        budgets: { type: 'belongs_to', key: 'budget_id' },
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @text('name') name!: string;
    @text('type') type!: string;
    @text('currency_code') currencyCode!: string;
    @field('initial_balance') initialBalance!: number;
    @field('current_balance') currentBalance!: number;
    @text('emoji') emoji?: string;
    @text('color') color!: string;
    @field('position_on_screen') positionOnScreen!: number;
    @field('is_active') isActive!: boolean;
    @readonly @date('created_at') createdAt!: Date;
    @readonly @date('updated_at') updatedAt!: Date;
}
