import { useDatabase } from '@nozbe/watermelondb/react';


export const useDataBase = () => {
    const database = useDatabase();

    return { database };
};
