/**
 * @author Remco Stoeten
 * @description Validation service types
 */

export type ValidationResult<T> = {
    success: boolean
    data?: T
    error?: {
        message: string
        code: string
    }
}

export type SocialPlatform = 'twitter' | 'github' | 'gitlab'

export type ValidationService = {
    validate: (input: unknown) => ValidationResult<unknown>
    validateField: (field: string, value: unknown) => ValidationResult<unknown>
} 
