/**
 * @author Remco Stoeten
 * @description Authentication types
 */


export type AuthError = {
    message: string
    code: string
}

export type AuthFormData = {
    email: string
    password: string
    firstName?: string
    lastName?: string
}

export type RegisterFormData = AuthFormData

export type LoginFormData = AuthFormData
