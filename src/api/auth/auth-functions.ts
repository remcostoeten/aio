import {
  AuthMethods,
  AuthResponse,
  User,
  AuthStateChangeCallback,
  UserRole
} from '../types/auth-types';
import { SupabaseClient } from '@supabase/supabase-js';

export function createAuthMethods(client: SupabaseClient): AuthMethods {
  const getUserFromDb = async (userId: string): Promise<User | null> => {
    const { data, error } = await client
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error || !data) return null;
    return mapUser(data);
  };

  return {
    signUp: async (email: string, password: string): Promise<AuthResponse> => {
      try {
        const { data, error } = await client.auth.signUp({
          email,
          password
        });

        if (error) throw error;

        const user = data.user ? await getUserFromDb(data.user.id) : null;
        return { user, error: null };
      } catch (error) {
        return { user: null, error: error as Error };
      }
    },

    signIn: async (email: string, password: string): Promise<AuthResponse> => {
      try {
        const { data, error } = await client.auth.signInWithPassword({
          email,
          password
        });

        if (error) throw error;

        const user = data.user ? await getUserFromDb(data.user.id) : null;
        return { user, error: null };
      } catch (error) {
        return { user: null, error: error as Error };
      }
    },

    signInWithProvider: async (provider: string): Promise<void> => {
      const { error } = await client.auth.signInWithOAuth({
        provider: provider as any,
        options: {
          redirectTo: window.location.origin
        }
      });

      if (error) throw error;
    },

    signOut: async (): Promise<{ error: Error | null }> => {
      try {
        const { error } = await client.auth.signOut();
        if (error) throw error;
        return { error: null };
      } catch (error) {
        return { error: error as Error };
      }
    },

    getCurrentUser: async (): Promise<User | null> => {
      try {
        const { data: { user }, error } = await client.auth.getUser();
        if (error || !user) return null;
        
        return getUserFromDb(user.id);
      } catch (error) {
        console.error('Error getting current user:', error);
        return null;
      }
    },

    onAuthStateChange: (callback: AuthStateChangeCallback): (() => void) => {
      const { data: { subscription } } = client.auth.onAuthStateChange(
        async (_, session) => {
          if (session?.user) {
            const user = await getUserFromDb(session.user.id);
            callback(user);
          } else {
            callback(null);
          }
        }
      );

      return () => subscription.unsubscribe();
    },

    updateUserProfile: async (userId: string, updates: Partial<User>): Promise<User | null> => {
      try {
        const { data, error } = await client
          .from('users')
          .update(updates)
          .eq('id', userId)
          .select()
          .single();

        if (error) throw error;
        return data ? mapUser(data) : null;
      } catch (error) {
        console.error('Error updating user profile:', error);
        return null;
      }
    }
  };
}

function mapUser(dbUser: any): User {
  return {
    id: dbUser.id,
    email: dbUser.email,
    roles: dbUser.roles || ['user'] as UserRole[],
    createdAt: dbUser.created_at,
    updatedAt: dbUser.updated_at
  };
}
