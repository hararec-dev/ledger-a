import { Model } from '@nozbe/watermelondb';
import { relation, children } from '@nozbe/watermelondb/decorators';
import type { PersonalTransactionModel } from '@database/models/PersonalTransactionModel';
import type { TagModel } from '@database/models/TagModel';
import type { EventStoreModel } from '@database/models/EventStoreModel';
import type { SnapshotModel } from '@database/models/SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class PersonalTransactionTagModel extends Model {
    static table = 'personal_transaction_tags';
    static associations: Associations = {
        transactions: { type: 'belongs_to', key: 'transaction_id' },
        tags: { type: 'belongs_to', key: 'tag_id' },
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @relation('transactions', 'transaction_id') transaction!: PersonalTransactionModel;
    @relation('tags', 'tag_id') tag!: TagModel;
    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
}
