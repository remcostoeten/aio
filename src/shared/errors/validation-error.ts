/**
 * @author Remco Stoeten
 * @description Validation specific errors
 */

import type { ZodError } from 'zod'
import { BaseError, type BaseErrorParams } from './base-error'

export class ValidationError extends BaseError {
    constructor(params: BaseErrorParams) {
        super({
            ...params,
            code: params.code ?? 'VALIDATION_ERROR',
            status: params.status ?? 400,
            severity: params.severity ?? 'warning'
        })
    }

    static fromZodError(zodError: ZodError) {
        const errors = zodError.errors.map(err => ({
            path: err.path.join('.'),
            message: err.message
        }))

        return new ValidationError({
            message: 'Validation failed',
            code: 'VALIDATION_FAILED',
            metadata: { errors }
        })
    }

    static invalidInput(field: string, message: string) {
        return new ValidationError({
            message,
            code: 'VALIDATION_INVALID_INPUT',
            metadata: { field }
        })
    }

    static required(field: string) {
        return new ValidationError({
            message: `${field} is required`,
            code: 'VALIDATION_REQUIRED_FIELD',
            metadata: { field }
        })
    }
} 
