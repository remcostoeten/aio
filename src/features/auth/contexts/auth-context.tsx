import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../../../api/types/auth-types';
import { AuthService } from '../../../api/services/auth-service';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithGithub: () => Promise<void>;
  signInWithProvider: (provider: string) => Promise<void>;
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
    const { error } = await authService.signInWithEmail(email, password);
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const { error } = await authService.signUpWithEmail(email, password);
    return { error };
  };

  const signInWithGithub = async () => {
    await authService.signInWithGithub();
  };

  const signInWithProvider = async (provider: string) => {
    await authService.signInWithProvider(provider);
  };

  const resetPassword = async (email: string) => {
    const { error } = await authService.resetPassword(email);
    return { error };
  };

  const signOut = async () => {
    const { error } = await authService.signOut();
    return { error };
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
    signInWithGithub,
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
