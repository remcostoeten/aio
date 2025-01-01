import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../../../api/types/auth-types';
import { AuthService } from '../../../api/services/auth-service';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithProvider: (provider: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<{ error: Error | null }>;
  updateProfile: (updates: Partial<User>) => Promise<User | null>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{
  children: React.ReactNode;
  authService: AuthService;
}> = ({ children, authService }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initUser = async () => {
      const initialUser = await authService.getCurrentUser();
      setUser(initialUser);
      setLoading(false);
    };

    initUser();

    const unsubscribe = authService.onAuthStateChange((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [authService]);

  const signIn = async (email: string, password: string) => {
    const response = await authService.signInWithEmail(email, password);
    return { error: response.error };
  };

  const signUp = async (email: string, password: string) => {
    const response = await authService.signUpWithEmail(email, password);
    return { error: response.error };
  };

  const signInWithProvider = async (provider: string) => {
    const response = await authService.signInWithProvider(provider);
    return { error: response.error };
  };

  const resetPassword = async (email: string) => {
    const response = await authService.resetPassword(email);
    return { error: response.error };
  };

  const signOut = async () => {
    const response = await authService.signOut();
    return { error: response.error };
  };

  const updateProfile = async (updates: Partial<User>) => {
    if (user) {
      return authService.updateUserProfile(user.id, updates);
    }
    return null;
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signInWithProvider,
    signOut,
    updateProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
