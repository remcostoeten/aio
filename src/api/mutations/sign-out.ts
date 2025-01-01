import { AuthMethods } from '../types/auth-types';

export const signOut =
  (authMethods: AuthMethods) => async (): Promise<{ error: Error | null }> => {
    return authMethods.signOut();
  };
