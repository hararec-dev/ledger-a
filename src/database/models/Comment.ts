import { Model } from '@nozbe/watermelondb';
import { date, readonly, text, relation } from '@nozbe/watermelondb/decorators';
import { Post } from './Post';
import type { Associations } from '@nozbe/watermelondb/Model';


export class Comment extends Model {
    static table = 'comments';
    static associations: Associations = {
        posts: { type: 'belongs_to', key: 'post_id' },
    };

    @text('body') body!: string;
    @relation('posts', 'post_id') post!: Post;
    @date('last_seen_at') lastSeenAt?: Date;
    @readonly @date('created_at') createdAt!: Date;
    @readonly @date('updated_at') updatedAt!: Date;
}
