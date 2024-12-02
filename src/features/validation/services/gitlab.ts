/**
 * @author Remco Stoeten
 * @description GitLab validation service
 */

import { z } from 'zod'

export const gitlabService = {
    validateUsername: (username: string) => {
        return z.string()
            .regex(/^[a-zA-Z0-9_.-]+$/, 'Invalid GitLab username')
            .min(1, 'GitLab username is required')
            .safeParse(username)
    },

    validateProjectPath: (path: string) => {
        return z.string()
            .regex(/^[a-zA-Z0-9_.-\/]+$/, 'Invalid project path')
            .min(1, 'Project path is required')
            .safeParse(path)
    },

    validateToken: (token: string) => {
        return z.string()
            .min(20, 'Invalid GitLab token length')
            .regex(/^glpat-[a-zA-Z0-9-_]{20}$/, 'Invalid GitLab token format')
            .safeParse(token)
    }
} 
