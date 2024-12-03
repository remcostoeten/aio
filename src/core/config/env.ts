/**
 * @author Remco Stoeten
 * @description Environment variable configuration and validation
 */

import { z } from 'zod'

const envSchema = z.object({
    ADMIN_EMAIL: z.string().email(),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development')
})

type Env = z.infer<typeof envSchema>

function validateEnv(): Env {
    try {
        return envSchema.parse(process.env)
    } catch (error) {
        if (error instanceof z.ZodError) {
            const missingVars = error.issues.map(issue => issue.path.join('.'))
            throw new Error(`Missing or invalid environment variables: ${missingVars.join(', ')}`)
        }
        throw error
    }
}

export const env = validateEnv() 
