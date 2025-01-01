import { AuthMethods } from '../types/auth-types';

export const signInWithProvider =
  (authMethods: AuthMethods) =>
  async (provider: string): Promise<void> => {
    return authMethods.signInWithProvider(provider);
  };
