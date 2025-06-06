import { Model } from '@nozbe/watermelondb';
import { field, date, text } from '@nozbe/watermelondb/decorators';
import type { Associations } from '@nozbe/watermelondb/Model';


export class SnapshotModel extends Model {
    static table = 'snapshots';
    static associations: Associations = {};

    @field('aggregate_id') aggregateId!: string;
    @text('aggregate_type') aggregateType!: string;
    @text('snapshot_data') snapshotData!: string;
    @date('snapshot_timestamp_at') snapshotTimestamp!: Date;
    @field('version') version!: number;
}
