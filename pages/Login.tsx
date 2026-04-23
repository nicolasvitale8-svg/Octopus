import React, { useId, useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { useAuth } from '../services/auth';
import { supabase } from '../services/supabase';

const Login = () => {
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const location = useLocation() as { state?: { from?: string } };
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const redirectTo = location.state?.from && location.state.from !== '/login'
    ? location.state.from
    : '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setError(null);

    if (!email || !password) {
      setError('Ingresá email y contraseña.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setError('El email no tiene un formato válido.');
      return;
    }

    setSubmitting(true);
    const { error: authError } = await signIn(email.trim(), password);
    setSubmitting(false);

    if (authError) {
      setError(authError);
      return;
    }
    navigate(redirectTo, { replace: true });
  };

  const handleGoogle = async () => {
    if (!supabase) {
      setError('Supabase no está configurado.');
      return;
    }
    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    });
    if (oauthError) setError(oauthError.message);
  };

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 shadow-2xl w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white">Bienvenido de nuevo</h1>
            <p className="text-slate-400 text-sm">Ingresá a tu tablero de control.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor={emailId} className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
                Email
              </label>
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1FB6D5]/60 focus:border-[#1FB6D5]/60"
                required
              />
            </div>
            <div>
              <label htmlFor={passwordId} className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wide">
                Contraseña
              </label>
              <input
                id={passwordId}
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-md px-3 py-2 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1FB6D5]/60 focus:border-[#1FB6D5]/60"
                required
                minLength={6}
              />
            </div>

            {error && (
              <div role="alert" className="flex items-start gap-2 p-3 rounded-md bg-red-950/40 border border-red-900/60 text-red-300 text-sm">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button type="submit" fullWidth className="mt-4" disabled={submitting}>
              {submitting ? 'Ingresando…' : 'Ingresar'}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-900 text-slate-500">O continuar con</span>
              </div>
            </div>

            <Button type="button" variant="outline" fullWidth onClick={handleGoogle} disabled={submitting}>
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.536-6.033-5.696c0-3.159,2.702-5.696,6.033-5.696c1.482,0,2.615,0.699,3.561,1.584L18.845,5.49C17.151,3.972,14.93,3,12.545,3c-5.186,0-9.39,4.204-9.39,9.39s4.204,9.39,9.39,9.39c4.953,0,8.73-3.489,8.73-8.875c0-0.729-0.081-1.397-0.18-2.022H12.545z" />
              </svg>
              Google
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            ¿No tenés cuenta? <Link to="/quick-diagnostic" className="text-cyan-400 hover:underline">Hacé un diagnóstico primero</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
