import { DatabaseProvider } from '@nozbe/watermelondb/react';
import { database } from '../../database';
import type { ProviderProps } from '../../types';


export const DBProvider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <DatabaseProvider database={database}>
            {children}
        </DatabaseProvider>
    );
};
