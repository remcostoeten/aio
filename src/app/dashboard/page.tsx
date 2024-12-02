/**
 * @author Remco Stoeten
 * @description Dashboard page
 */

import { getUserProfile } from '@/server/actions/queries'

export default async function DashboardPage() {
    const profile = await getUserProfile('admin@remcostoeten.com')

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold">
                Welcome, {profile?.firstName}!
            </h1>
            <p className="mt-4 text-muted-foreground">
                This is your protected dashboard page.
            </p>
        </div>
    )
} 
