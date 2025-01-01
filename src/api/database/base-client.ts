import { DbClient, User, AuthResponse } from '../types/db-client-interface';

export abstract class BaseDbClient implements DbClient {
  abstract signUp(email: string, password: string): Promise<AuthResponse>;
  abstract signIn(email: string, password: string): Promise<AuthResponse>;
  abstract signInWithProvider(provider: string): Promise<void>;
  abstract signOut(): Promise<{ error: Error | null }>;
  abstract getCurrentUser(): Promise<User | null>;
  abstract onAuthStateChange(callback: (user: User | null) => void): () => void;
}
