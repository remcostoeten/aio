import { User } from '../types/auth-types';
import { AuthMethods } from '../types/auth-types';

export const getCurrentUser =
  (authMethods: AuthMethods) => async (): Promise<User | null> => {
    return authMethods.getCurrentUser();
  };
