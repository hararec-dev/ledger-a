import { Model } from '@nozbe/watermelondb';
import { readonly, date, text, children } from '@nozbe/watermelondb/decorators';
import type { EventStoreModel } from './EventStoreModel';
import type { SnapshotModel } from './SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class TagModel extends Model {
    static table = 'tags';
    static associations: Associations = {
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @text('name') name!: string;
    @text('emoji') emoji?: string;
    @text('color') color!: string;
    @readonly @date('created_at') createdAt!: Date;
}
