import { AuthResponse, AuthMethods } from '../types/auth-types';

export const signUp =
  (authMethods: AuthMethods) =>
  async (email: string, password: string): Promise<AuthResponse> => {
    return authMethods.signUp(email, password);
  };
