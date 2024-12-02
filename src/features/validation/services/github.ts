/**
 * @author Remco Stoeten
 * @description GitHub validation service
 */

import { z } from 'zod'

export const githubService = {
    validateUsername: (username: string) => {
        return z.string()
            .regex(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, 'Invalid GitHub username')
            .min(1, 'GitHub username is required')
            .safeParse(username)
    },

    validateRepository: (name: string) => {
        return z.string()
            .regex(/^[a-zA-Z0-9_.-]+$/, 'Invalid repository name')
            .min(1, 'Repository name is required')
            .safeParse(name)
    },

    validateUrl: (url: string) => {
        return z.string()
            .url('Invalid GitHub URL')
            .regex(/^https:\/\/github\.com\//, 'Must be a GitHub URL')
            .safeParse(url)
    },

    validateToken: (token: string) => {
        return z.string()
            .min(40, 'Invalid GitHub token length')
            .regex(/^gh[ps]_[a-zA-Z0-9]{36}$/, 'Invalid GitHub token format')
            .safeParse(token)
    }
} 
