/**
 * @author Remco Stoeten
 * @description Authentication specific errors
 */

import { BaseError, type BaseErrorParams } from './base-error'
export class AuthError extends BaseError {
    constructor(params: BaseErrorParams) {
        super({
            ...params,
            code: params.code ?? 'AUTH_ERROR',
            status: params.status ?? 401,
            severity: params.severity ?? 'error'
        })
    }

    static credentialsInvalid(metadata?: Record<string, unknown>) {
        return new AuthError({
            message: 'Invalid credentials',
            code: 'AUTH_INVALID_CREDENTIALS',
            metadata
        })
    }

    static sessionExpired() {
        return new AuthError({
            message: 'Session has expired',
            code: 'AUTH_SESSION_EXPIRED',
            status: 401
        })
    }

    static unauthorized() {
        return new AuthError({
            message: 'Unauthorized access',
            code: 'AUTH_UNAUTHORIZED',
            status: 403
        })
    }

    static userNotFound(metadata?: Record<string, unknown>) {
        return new AuthError({
            message: 'User not found',
            code: 'AUTH_USER_NOT_FOUND',
            status: 404,
            metadata
        })
    }
}
