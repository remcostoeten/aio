import {
  AuthMethods,
  AuthResponse,
  User,
  AuthStateChangeCallback,
} from '../types/auth-types';

export function createAuthMethods(client: any): AuthMethods {
  return {
    signUp: async (email: string, password: string): Promise<AuthResponse> => {
      try {
        const result = await client.auth.signUp({ email, password });
        return mapAuthResponse(result);
      } catch (error) {
        return { user: null, error: error as Error };
      }
    },

    signIn: async (email: string, password: string): Promise<AuthResponse> => {
      try {
        const result = await client.auth.signInWithPassword({
          email,
          password,
        });
        return mapAuthResponse(result);
      } catch (error) {
        return { user: null, error: error as Error };
      }
    },

    signInWithProvider: async (provider: string): Promise<void> => {
      await client.auth.signInWithOAuth({ provider });
    },

    signOut: async (): Promise<{ error: Error | null }> => {
      try {
        await client.auth.signOut();
        return { error: null };
      } catch (error) {
        return { error: error as Error };
      }
    },

    getCurrentUser: async (): Promise<User | null> => {
      const {
        data: { user },
      } = await client.auth.getUser();
      return mapUser(user);
    },

    onAuthStateChange: (callback: AuthStateChangeCallback): (() => void) => {
      const {
        data: { subscription },
      } = client.auth.onAuthStateChange((_, session) => {
        callback(mapUser(session?.user ?? null));
      });

      return () => subscription.unsubscribe();
    },
  };
}

function mapUser(user: any): User | null {
  if (!user) return null;
  return {
    id: user.id,
    email: user.email || '',
  };
}

function mapAuthResponse(result: any): AuthResponse {
  return {
    user: mapUser(result.data.user),
    error: result.error as Error | null,
  };
}
