import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, text, children } from '@nozbe/watermelondb/decorators';
import type { EventStoreModel } from './EventStoreModel';
import type { SnapshotModel } from './SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class PersonalAchievementModel extends Model {
    static table = 'personal_achievements';
    static associations: Associations = {
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @text('name') name!: string;
    @text('condition') condition!: string;
    @field('is_unlocked') isUnlocked!: boolean;
    @date('unlocked_date_at') unlockedDate?: Date;
    @readonly @date('created_at') createdAt!: Date;
}
