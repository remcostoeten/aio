import { z } from 'zod'

// Base schemas
export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email address')

export const passwordSchema = z
  .string()
  .min(1, 'Password is required')
  .min(6, 'Password must be at least 6 characters')

// Form schemas
export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>

// Registration can extend login with additional fields
export const registrationFormSchema = loginFormSchema.extend({
  confirmPassword: passwordSchema,
  name: z.string().min(1, 'Name is required'),
})

export type RegistrationFormSchema = z.infer<typeof registrationFormSchema>

// Helper for field-level validation
export function validateFormField<T extends z.ZodType>(
  schema: T,
  value: unknown
): string | null {
  const result = schema.safeParse(value)
  return !result.success ? result.error.errors[0].message : null
} 
