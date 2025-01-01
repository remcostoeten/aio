import { AuthMethods, User, AuthResponse } from '../types/auth-types';
import * as queries from '../queries';
import * as mutations from '../mutations';

export function createAuthService(authMethods: AuthMethods) {
  return {
    signUpWithEmail: (email: string, password: string): Promise<AuthResponse> =>
      mutations.signUp(authMethods)(email, password),

    signInWithEmail: (email: string, password: string): Promise<AuthResponse> =>
      mutations.signIn(authMethods)(email, password),

    signInWithGithub: (): Promise<void> =>
      mutations.signInWithProvider(authMethods)('github'),

    signOut: (): Promise<{ error: Error | null }> =>
      mutations.signOut(authMethods)(),

    getCurrentUser: (): Promise<User | null> =>
      queries.getCurrentUser(authMethods)(),

    getUserProfile: (userId: string): Promise<User | null> =>
      queries.getUserProfile(authMethods)(userId),

    updateUserProfile: (
      userId: string,
      updates: Partial<User>
    ): Promise<User | null> =>
      mutations.updateUserProfile(authMethods)(userId, updates),

    onAuthStateChange: (callback: (user: User | null) => void): (() => void) =>
      authMethods.onAuthStateChange(callback),
  };
}

export type AuthService = ReturnType<typeof createAuthService>;
