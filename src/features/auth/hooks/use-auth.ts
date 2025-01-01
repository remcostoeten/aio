import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { AuthService } from '../../../api/services/auth-service';
import { supabase } from '../../../api/supabase/client';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial user
    AuthService.getCurrentUser().then(setUser);

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    signOut: AuthService.signOut,
  };
};