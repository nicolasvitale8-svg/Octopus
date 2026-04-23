import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../services/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  /** Si true, exige rol admin exacto. */
  requireAdmin?: boolean;
  /** Si true, exige admin o consultant (staff interno). */
  requireStaff?: boolean;
}

/**
 * Guard de rutas privadas.
 * - Mientras carga la sesión, muestra placeholder.
 * - Sin sesión: redirige a /login (con `from` para volver después).
 * - Con sesión pero sin los roles requeridos: redirige a /dashboard.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAdmin = false,
  requireStaff = false,
}) => {
  const { session, isAdmin, isStaff, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#021019] text-slate-400">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#1FB6D5] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs tracking-widest uppercase">Verificando sesión…</span>
        </div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  if (requireStaff && !isStaff) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
