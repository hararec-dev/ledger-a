import { Model } from '@nozbe/watermelondb';
import { relation, field, date, readonly, text, children } from '@nozbe/watermelondb/decorators';
import type { PersonalAccountModel } from '@database/models/PersonalAccountModel';
import type { EventStoreModel } from '@database/models/EventStoreModel';
import type { SnapshotModel } from '@database/models/SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class PersonalTransferModel extends Model {
    static table = 'personal_transfers';
    static associations: Associations = {
        accounts_from: { type: 'belongs_to', key: 'from_account_id' },
        accounts_to: { type: 'belongs_to', key: 'to_account_id' },
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @relation('accounts_from', 'from_account_id') fromAccount!: PersonalAccountModel;
    @relation('accounts_to', 'to_account_id') toAccount!: PersonalAccountModel;
    @field('amount') amount!: number;
    @date('date_at') dateAt!: Date;
    @text('description') description?: string;
    @readonly @date('created_at') createdAt!: Date;
}
