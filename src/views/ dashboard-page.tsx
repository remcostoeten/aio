'use client';

import { useAuth } from '../features/auth/hooks/use-auth';

export function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.email}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
