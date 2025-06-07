import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, text, children } from '@nozbe/watermelondb/decorators';
import type { EventStoreModel } from '@database/models/EventStoreModel';
import type { SnapshotModel } from '@database/models/SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class SettingModel extends Model {
    static table = 'settings';
    static associations: Associations = {
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @text('default_currency') defaultCurrency!: string;
    @text('theme') theme!: string;
    @text('security_pin_hash') securityPinHash?: string;
    @field('is_biometrics_enabled') isBiometricsEnabled!: boolean;
    @field('is_stealth_mode') isStealthMode!: boolean;
    @text('backup_frequency') backupFrequency?: string;
    @readonly @date('created_at') createdAt!: Date;
}
