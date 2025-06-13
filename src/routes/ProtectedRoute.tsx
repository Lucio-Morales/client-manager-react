import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

// Wrapper para rutas protegidas

interface ProtectedRouteProps {
  allowedRoles: Array<'admin' | 'trainer' | 'client'>; // Roles que pueden acceder a la ruta.
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const user = useUserStore((state) => state.user);
  // si user === null => el usuario no está logueado => redireccion a /login
  // si el usuario esta logueado pero no tiene permiso => redireccion a /unauthorized
  // si el usuario esta logueado y tiene el rol permitido => <Outlet />
  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.role!)) return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
}
