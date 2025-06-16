import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

interface ProtectedRouteProps {
  allowedRoles: Array<'admin' | 'trainer' | 'client'>;
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const user = useUserStore((state) => state.user);

  if (!user) return <Navigate to="/auth/login" replace />;
  if (!allowedRoles.includes(user.role!)) return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
}
