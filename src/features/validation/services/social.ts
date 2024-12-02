/**
 * @author Remco Stoeten
 * @description Social media validation service
 */

import { z } from 'zod'

export const socialService = {
    validateTwitterHandle: (handle: string) => {
        return z.string()
            .regex(/^@?(\w){1,15}$/, 'Invalid Twitter handle')
            .transform(val => val.startsWith('@') ? val : `@${val}`)
            .safeParse(handle)
    },

    validateSocialUrl: (url: string, platform: 'twitter' | 'github' | 'gitlab') => {
        const patterns = {
            twitter: /^https:\/\/(twitter|x)\.com\//,
            github: /^https:\/\/github\.com\//,
            gitlab: /^https:\/\/gitlab\.com\//
        }

        return z.string()
            .url(`Invalid ${platform} URL`)
            .regex(patterns[platform], `Must be a ${platform} URL`)
            .safeParse(url)
    }
} 
