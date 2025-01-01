import { Navigate, useNavigate } from '@tanstack/react-router';
import { useAuth } from '../contexts/auth-context';
import { useEffect } from 'react';

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
