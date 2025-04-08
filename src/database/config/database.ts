import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { migrations } from './migrations';
import { schema } from './schema';

const adapter = new SQLiteAdapter({
    schema,
    migrations,
    dbName: 'ledger_a',
    /* onSetUpError: error => {}, */
});

export const database = new Database({
    adapter,
    modelClasses: [
        /* Post, */
    ],
});
