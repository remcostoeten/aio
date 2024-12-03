/**
 * @author Remco Stoeten
 * @description Base error class for standardized error handling
 */

export type ErrorMetadata = Record<string, unknown>

export type ErrorSeverity = 'info' | 'warning' | 'error' | 'critical'

export type BaseErrorParams = {
    message: string
    code?: string
    status?: number
    severity?: ErrorSeverity
    metadata?: ErrorMetadata
    cause?: Error
}

export class BaseError extends Error {
    public readonly code: string
    public readonly status: number
    public readonly severity: ErrorSeverity
    public readonly metadata: ErrorMetadata
    public readonly timestamp: string
    public readonly cause?: Error

    constructor({
        message,
        code = 'UNKNOWN_ERROR',
        status = 500,
        severity = 'error',
        metadata = {},
        cause,
    }: BaseErrorParams) {
        super(message)
        this.name = this.constructor.name
        this.code = code
        this.status = status
        this.severity = severity
        this.metadata = metadata
        this.timestamp = new Date().toISOString()
        this.cause = cause

        Error.captureStackTrace(this, this.constructor)
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code,
            status: this.status,
            severity: this.severity,
            metadata: this.metadata,
            timestamp: this.timestamp,
            stack: this.stack,
            cause: this.cause?.message
        }
    }

    public static isBaseError(error: unknown): error is BaseError {
        return error instanceof BaseError
    }
} 
