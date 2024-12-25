/**
 * @author Remco Stoeten
 * @description Custom error classes for standardized error handling
 */

export class BaseError extends Error {
	constructor(
		message: string,
		public code: string,
		public statusCode: number = 500,
		public data?: unknown
	) {
		super(message)
		this.name = this.constructor.name
		Error.captureStackTrace(this, this.constructor)
	}
}

export class AuthenticationError extends BaseError {
	constructor(message: string, code = 'AUTH_ERROR') {
		super(message, code, 401)
	}
}

export class ValidationError extends BaseError {
	constructor(message: string, data?: unknown) {
		super(message, 'VALIDATION_ERROR', 400, data)
	}
}

export class NotFoundError extends BaseError {
	constructor(resource: string) {
		super(`${resource} not found`, 'NOT_FOUND', 404)
	}
}

export class DatabaseError extends BaseError {
	constructor(message: string, data?: unknown) {
		super(message, 'DATABASE_ERROR', 500, data)
	}
}

export class NetworkError extends BaseError {
	constructor(message = 'Network request failed') {
		super(message, 'NETWORK_ERROR', 503)
	}
}

export class RateLimitError extends BaseError {
	constructor(message = 'Too many requests') {
		super(message, 'RATE_LIMIT', 429)
	}
}

// Error handler helper
export function handleError(error: unknown): BaseError {
	if (error instanceof BaseError) {
		return error
	}

	if (error instanceof Error) {
		return new BaseError(error.message, 'UNKNOWN_ERROR')
	}

	return new BaseError('An unknown error occurred', 'UNKNOWN_ERROR')
}
