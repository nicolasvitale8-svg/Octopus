import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';

export type AppRole = 'admin' | 'consultant' | 'manager' | 'client' | 'user' | null;

interface AuthState {
  session: Session | null;
  user: User | null;
  role: AppRole;
  /** Rol admin exacto. */
  isAdmin: boolean;
  /** Admin o consultant — acceso a panel de leads según policies de la DB. */
  isStaff: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

/**
 * Trae el rol del usuario desde public.usuarios.
 * La RLS existente permite que cada usuario lea su propia fila.
 */
async function fetchUserRole(userId: string | undefined): Promise<AppRole> {
  if (!userId || !supabase) return null;
  const { data, error } = await supabase
    .from('usuarios')
    .select('role')
    .eq('id', userId)
    .maybeSingle();
  if (error) {
    console.warn('[auth] fetch role failed:', error.message);
    return null;
  }
  return (data?.role ?? null) as AppRole;
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<AppRole>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const bootstrap = async () => {
      if (!supabase) {
        if (active) setLoading(false);
        return;
      }
      const { data } = await supabase.auth.getSession();
      if (!active) return;
      setSession(data.session);
      setRole(await fetchUserRole(data.session?.user.id));
      setLoading(false);
    };

    bootstrap();

    if (!supabase) return;
    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      if (!active) return;
      setSession(newSession);
      setRole(await fetchUserRole(newSession?.user.id));
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    if (!supabase) return { error: 'Supabase no configurado (faltan variables de entorno).' };
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return {};
  };

  const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setSession(null);
    setRole(null);
  };

  const value: AuthState = {
    session,
    user: session?.user ?? null,
    role,
    isAdmin: role === 'admin',
    isStaff: role === 'admin' || role === 'consultant',
    loading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthState => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
};
