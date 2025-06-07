import { Model } from '@nozbe/watermelondb';
import { relation, readonly, date, text, children } from '@nozbe/watermelondb/decorators';
import type { PersonalCategoryModel } from '@database/models/PersonalCategoryModel';
import type { EventStoreModel } from '@database/models/EventStoreModel';
import type { SnapshotModel } from '@database/models/SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class PersonalAutoCategoryRuleModel extends Model {
    static table = 'personal_auto_category_rules';
    static associations: Associations = {
        categories: { type: 'belongs_to', key: 'category_id' },
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @relation('categories', 'category_id') category!: PersonalCategoryModel;
    @text('keyword') keyword!: string;
    @readonly @date('created_at') createdAt!: Date;
}
