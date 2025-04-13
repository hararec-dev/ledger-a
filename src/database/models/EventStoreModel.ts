import { Model } from '@nozbe/watermelondb';
import { field, date, text } from '@nozbe/watermelondb/decorators';
import type { Associations } from '@nozbe/watermelondb/Model';


export class EventStoreModel extends Model {
    static table = 'events_store';
    static associations: Associations = {};

    @field('aggregate_id') aggregateId!: string;
    @text('aggregate_type') aggregateType!: string;
    @text('event_type') eventType!: string;
    @text('event_data') eventData!: string;
    @field('version') version!: number;
    @date('event_timestamp_at') eventTimestamp!: Date;
}
