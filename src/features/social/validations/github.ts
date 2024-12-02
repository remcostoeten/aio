/**
 * @author Remco Stoeten
 * @description GitHub validation rules
 */

import { z } from 'zod'

export const githubValidation = z.object({
    username: z.string()
        .regex(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, 'Invalid GitHub username')
        .min(1, 'GitHub username is required'),

    repositoryName: z.string()
        .regex(/^[a-zA-Z0-9_.-]+$/, 'Invalid repository name')
        .min(1, 'Repository name is required'),

    url: z.string()
        .url('Invalid GitHub URL')
        .regex(/^https:\/\/github\.com\//, 'Must be a GitHub URL'),

    accessToken: z.string()
        .min(40, 'Invalid GitHub access token')
        .regex(/^gh[ps]_[a-zA-Z0-9]{36}$/, 'Invalid GitHub token format')
})

export type GithubValidation = z.infer<typeof githubValidation> 
