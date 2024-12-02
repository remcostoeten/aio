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
}

export type RegisterFormData = AuthFormData & {
    firstName: string
    lastName: string
}
