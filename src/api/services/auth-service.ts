import { createAuthMethods } from '../auth/auth-functions';
import { SupabaseClient, Provider } from '@supabase/supabase-js';
import { env } from '../env';
import { User } from '../types/auth-types';

export type AuthResponse = {
  user: User | null;
  error: Error | null;
};

export interface AuthService {
  signUpWithEmail: (email: string, password: string) => Promise<AuthResponse>;
  signInWithEmail: (email: string, password: string) => Promise<AuthResponse>;
  signInWithProvider: (provider: string) => Promise<AuthResponse>;
  signOut: () => Promise<AuthResponse>;
  resetPassword: (email: string) => Promise<AuthResponse>;
  getCurrentUser: () => Promise<User | null>;
  onAuthStateChange: (callback: (user: User | null) => void) => () => void;
  updateUserProfile: (userId: string, updates: Partial<User>) => Promise<User | null>;
  checkAndAssignAdminRole: () => Promise<void>;
}

export function createAuthService(client: SupabaseClient): AuthService {
  const authMethods = createAuthMethods(client);
  const isAdminEmail = (email: string) => env.VITE_ADMIN_EMAIL.includes(email);

  return {
    signUpWithEmail: async (email: string, password: string) => {
      const response = await authMethods.signUp(email, password);
      if (response.user && isAdminEmail(email)) {
        await authMethods.updateUserProfile(response.user.id, {
          roles: ['user', 'admin']
        });
      }
      return response;
    },

    signInWithEmail: async (email: string, password: string) => {
      const response = await authMethods.signIn(email, password);
      if (response.user && isAdminEmail(email) && !response.user.roles?.includes('admin')) {
        await authMethods.updateUserProfile(response.user.id, {
          roles: [...(response.user.roles || []), 'admin']
        });
      }
      return response;
    },

    signInWithProvider: async (provider: string) => {
      try {
        const response = await client.auth.signInWithOAuth({
          provider: provider as Provider,
          options: { redirectTo: window.location.origin }
        });
        return { 
          user: null,
          error: response.error 
        };
      } catch (error) {
        return { user: null, error: error as Error };
      }
    },

    resetPassword: async (email: string) => {
      const { error } = await client.auth.resetPasswordForEmail(email);
      return { user: null, error };
    },

    signOut: async () => {
      const { error } = await authMethods.signOut();
      return { user: null, error };
    },

    getCurrentUser: authMethods.getCurrentUser,
    onAuthStateChange: authMethods.onAuthStateChange,
    updateUserProfile: authMethods.updateUserProfile,
    checkAndAssignAdminRole: async () => {
      const user = await authMethods.getCurrentUser();
      if (user && isAdminEmail(user.email) && !user.roles?.includes('admin')) {
        await authMethods.updateUserProfile(user.id, {
          roles: [...(user.roles || []), 'admin']
        });
      }
    }
  };
}
