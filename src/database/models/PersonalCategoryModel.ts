import { Model } from '@nozbe/watermelondb';
import { field, relation, readonly, date, text, children } from '@nozbe/watermelondb/decorators';
import type { EventStoreModel } from './EventStoreModel';
import type { SnapshotModel } from './SnapshotModel';
import type { Associations } from '@nozbe/watermelondb/Model';


export class PersonalCategoryModel extends Model {
    static table = 'personal_categories';
    static associations: Associations = {
        categories: { type: 'has_many', foreignKey: 'parent_category_id' },
        auto_category_rules: { type: 'has_many', foreignKey: 'category_id' },
        budgets: { type: 'has_many', foreignKey: 'category_id' },
        events: { type: 'has_many', foreignKey: 'aggregate_id' },
        snapshots: { type: 'has_many', foreignKey: 'aggregate_id' },
    };

    @children('events') events?: EventStoreModel[];
    @children('snapshots') snapshots?: SnapshotModel[];
    @text('name') name!: string;
    @text('icon') icon?: string;
    @text('color') color!: string;
    @text('type') type!: string;
    @relation('categories', 'parent_category_id') parentCategory?: PersonalCategoryModel[];
    @field('is_system') isSystem!: boolean;
    @readonly @date('created_at') createdAt!: Date;
}
