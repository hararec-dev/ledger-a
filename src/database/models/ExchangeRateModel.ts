import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, text, children } from '@nozbe/watermelondb/decorators';
import type { EventStoreModel } from '@database/models/EventStoreModel';
import type { SnapshotModel } from '@database/models/SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class ExchangeRateModel extends Model {
    static table = 'exchange_rates';
    static associations: Associations = {
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @text('from_currency') fromCurrency!: string;
    @text('to_currency') toCurrency!: string;
    @field('rate') rate!: number;
    @date('date_at') dateAt!: Date;
    @readonly @date('created_at') createdAt!: Date;
}
