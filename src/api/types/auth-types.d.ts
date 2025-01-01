export type UserRole = 'user' | 'admin';

export type User = {
  id: string;
  email: string;
  roles: UserRole[];
  createdAt?: string;
  updatedAt?: string;
};

export type AuthResponse = {
  user: User | null;
  error: Error | null;
};

export type AuthStateChangeCallback = (user: User | null) => void;

export interface AuthMethods {
  signUp: (email: string, password: string) => Promise<AuthResponse>;
  signIn: (email: string, password: string) => Promise<AuthResponse>;
  signInWithProvider: (provider: string) => Promise<void>;
  signOut: () => Promise<{ error: Error | null }>;
  getCurrentUser: () => Promise<User | null>;
  onAuthStateChange: (callback: AuthStateChangeCallback) => () => void;
  updateUserProfile: (userId: string, updates: Partial<User>) => Promise<User | null>;
} 
