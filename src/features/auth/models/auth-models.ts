import { z } from 'zod'

// Base model definitions
export const emailModel = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email address')

export const passwordModel = z
  .string()
  .min(1, 'Password is required')
  .min(6, 'Password must be at least 6 characters')

// Form models
export const loginModel = z.object({
  email: emailModel,
  password: passwordModel,
})

export type LoginForm = z.infer<typeof loginModel>

// Registration extends login with additional fields
export const registrationModel = loginModel.extend({
  confirmPassword: passwordModel,
  name: z.string().min(1, 'Name is required'),
})

export type RegistrationForm = z.infer<typeof registrationModel>

// Helper for field-level validation
export function validateField<T extends z.ZodType>(
  model: T,
  value: unknown
): string | null {
  const result = model.safeParse(value)
  return !result.success ? result.error.errors[0].message : null
} 
