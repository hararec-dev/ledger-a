import { useCallback } from 'react';
import { useDatabase } from '@nozbe/watermelondb/react';
import type {
    BatchOperation,
    BatchOperationResponse,
    DatabaseDeletionResponse,
    DatabaseOperationResponse,
    DatabaseQueryOptions,
    DatabaseUpdateResponse,
    ModelTypeMap,
    RecordCreationData,
    RecordDeletionData,
    RecordIdentifier,
    RecordUpdateData,
} from '../../types';


export const useLocalDatabase = () => {
    const database = useDatabase();

    const findRecords = useCallback(async <N extends keyof ModelTypeMap>(
        { table, clauses }: DatabaseQueryOptions<N>
    ): Promise<ModelTypeMap[N][]> => {
        const results = await database
            .get<ModelTypeMap[N]>(table)
            .query(...clauses)
            .fetch();
        return results;
    }, [database]);

    const findOneRecord = useCallback(async <N extends keyof ModelTypeMap>(
        { table, id }: RecordIdentifier<N>
    ): Promise<DatabaseOperationResponse<N>> => {
        try {
            const record = await database.get<ModelTypeMap[N]>(table).find(id);
            return {
                success: true,
                record,
            };
        } catch (error) {
            return {
                success: false,
                record: null,
            };
        }
    }, [database]);

    const createRecord = useCallback(async <N extends keyof ModelTypeMap>(
        { table, data }: RecordCreationData<N>
    ): Promise<ModelTypeMap[N]> => {
        const newRecord = await database.write(async () => {
            const record = await database.get<ModelTypeMap[N]>(table).create(rec => {
                Object.assign(rec, data);
            });
            return record;
        });
        return newRecord;
    }, [database]);

    const updateRecord = useCallback(async <N extends keyof ModelTypeMap>(
        { table, id, data }: RecordUpdateData<N>
    ): Promise<DatabaseUpdateResponse<N>> => {
        try {
            let updatedRecord: ModelTypeMap[N] | null = null;
            await database.write(async () => {
                const record = await database.get<ModelTypeMap[N]>(table).find(id);
                await record.update(rec => {
                    Object.assign(rec, data);
                });
                updatedRecord = record;
            });
            return {
                success: true,
                updatedRecord,
            };
        } catch (error) {
            return {
                success: false,
                updatedRecord: null,
            };
        }
    }, [database]);

    const deleteRecord = useCallback(async <N extends keyof ModelTypeMap>(
        { table, id }: RecordDeletionData<N>
    ): Promise<DatabaseDeletionResponse<N>> => {
        try {
            let deletedRecord: ModelTypeMap[N] | null = null;
            await database.write(async () => {
                const record = await database.get<ModelTypeMap[N]>(table).find(id);
                deletedRecord = record;
                await record.markAsDeleted();
            });
            return {
                success: true,
                deletedRecord,
            };
        } catch (error) {
            return {
                success: false,
                deletedRecord: null,
            };
        }
    }, [database]);

    const executeBatchOperations = useCallback(async <N extends keyof ModelTypeMap>(
        operations: BatchOperation<N>[]
    ): Promise<BatchOperationResponse<N>[]> => {
        const operationPromises: Promise<BatchOperationResponse<N>>[] = operations.map(async (operation) => {
            try {
                let result: ModelTypeMap[N] | ModelTypeMap[N][] | null = null;
                await database.write(async () => {
                    const { type, table, data, id, clauses } = operation;
                    switch (type) {
                        case 'create':
                            if (data) {
                                result = await database.get<ModelTypeMap[N]>(table).create(rec => {
                                    Object.assign(rec, data);
                                });
                            }
                            break;
                        case 'readOne':
                            if (id) {
                                result = await database.get<ModelTypeMap[N]>(table).find(id);
                            }
                            break;
                        case 'readMany':
                            if (clauses) {
                                result = await database.get<ModelTypeMap[N]>(table).query(...clauses).fetch();
                            }
                            break;
                        case 'update':
                            if (id && data) {
                                const record = await database.get<ModelTypeMap[N]>(table).find(id);
                                await record.update(rec => {
                                    Object.assign(rec, data);
                                });
                                result = record;
                            }
                            break;
                        case 'delete':
                            if (id) {
                                const record = await database.get<ModelTypeMap[N]>(table).find(id);
                                await record.markAsDeleted();
                                result = record;
                            }
                            break;
                        default:
                            throw new Error();
                    }
                });
                return { success: true, result };
            } catch (error) {
                return { success: false, result: null };
            }
        });
        const results = await Promise.all(operationPromises);
        return results;
    }, [database]);

    return {
        database,
        findRecords,
        findOneRecord,
        createRecord,
        updateRecord,
        deleteRecord,
        executeBatchOperations,
    };
};
