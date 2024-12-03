/**
 * @author Remco Stoeten
 * @description Profile management form
 */

'use client'

import { Button, Input } from 'ui'
import { useAuth } from '../providers/auth-provider'

export default function ProfileForm() {
    const { profile, updateProfile } = useAuth()

    async function onSubmit(formData: FormData) {
        const data = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            preferences: {
                ...profile?.preferences,
                language: formData.get('language') as string,
                theme: formData.get('theme') as 'light' | 'dark'
            }
        }

        await updateProfile(data)
    }

    return (
        <form action={onSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <Input
                        name="firstName"
                        placeholder="First Name"
                        defaultValue={profile?.firstName}
                    />
                    <Input
                        name="lastName"
                        placeholder="Last Name"
                        defaultValue={profile?.lastName}
                    />
                </div>
                <select
                    name="language"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue={profile?.preferences?.language}
                >
                    <option value="en">English</option>
                    <option value="nl">Dutch</option>
                </select>
                <select
                    name="theme"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    defaultValue={profile?.preferences?.theme}
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <Button type="submit" className="w-full">
                Update Profile
            </Button>
        </form>
    )
} 
