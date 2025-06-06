import { Model } from '@nozbe/watermelondb';
import { readonly, date, text, children } from '@nozbe/watermelondb/decorators';
import type { EventStoreModel } from '@database/models/EventStoreModel';
import type { SnapshotModel } from '@database/models/SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class PersonalConnectedBankModel extends Model {
    static table = 'personal_connected_banks';
    static associations: Associations = {
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @text('bank_name') bankName!: string;
    @text('account_number') accountNumber?: string;
    @text('access_token') accessToken?: string;
    @date('last_sync_at') lastSync?: Date;
    @readonly @date('created_at') createdAt!: Date;
}
