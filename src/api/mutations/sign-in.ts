import { AuthResponse, AuthMethods } from '../types/auth-types';

export const signIn =
  (authMethods: AuthMethods) =>
  async (email: string, password: string): Promise<AuthResponse> => {
    return authMethods.signIn(email, password);
  };
