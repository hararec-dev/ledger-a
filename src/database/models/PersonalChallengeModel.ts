import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, text, children } from '@nozbe/watermelondb/decorators';
import type { EventStoreModel } from './EventStoreModel';
import type { SnapshotModel } from './SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class PersonalChallengeModel extends Model {
    static table = 'personal_challenges';
    static associations: Associations = {
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @text('name') name!: string;
    @field('target_amount') targetAmount!: number;
    @date('start_date_at') startDate!: Date;
    @date('end_date_at') endDate!: Date;
    @field('current_amount') currentAmount!: number;
    @field('is_completed') isCompleted!: boolean;
    @readonly @date('created_at') createdAt!: Date;
}
