/**
 * @author Remco Stoeten
 * @description Database operation specific errors
 */

import { BaseError, type BaseErrorParams } from './base-error'

export class DatabaseError extends BaseError {
    constructor(params: BaseErrorParams) {
        super({
            ...params,
            code: params.code ?? 'DATABASE_ERROR',
            status: params.status ?? 500,
            severity: params.severity ?? 'critical'
        })
    }

    static connectionFailed(cause?: Error) {
        return new DatabaseError({
            message: 'Database connection failed',
            code: 'DATABASE_CONNECTION_FAILED',
            cause
        })
    }

    static queryFailed(query: string, cause?: Error) {
        return new DatabaseError({
            message: 'Database query failed',
            code: 'DATABASE_QUERY_FAILED',
            metadata: { query },
            cause
        })
    }

    static recordNotFound(table: string, id: string | number) {
        return new DatabaseError({
            message: 'Database record not found',
            code: 'DATABASE_RECORD_NOT_FOUND',
            status: 404,
            metadata: { table, id }
        })
    }
} 
