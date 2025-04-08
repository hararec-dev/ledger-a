import { Model } from '@nozbe/watermelondb';
import { field, date, readonly, text, children } from '@nozbe/watermelondb/decorators';
import { Comment } from './Comment';
import type { Associations } from '@nozbe/watermelondb/Model';


export class Post extends Model {
    static table = 'posts';
    static associations: Associations = {
        comments: { type: 'has_many', foreignKey: 'post_id' },
    };

    @text('title') title!: string;
    @text('subtitle') subtitle?: string;
    @text('body') body!: string;
    @field('is_pinned') isPinned!: boolean;
    @readonly @date('created_at') createdAt!: Date;
    @readonly @date('updated_at') updatedAt!: Date;
    @children('comments') comments!: Comment[];
}
