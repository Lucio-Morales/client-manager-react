import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '../../../store/userStore';
import { useHasHydrated } from '../../../hooks/useHasHydrated';

interface RequireUnauthProps {
  children: React.ReactNode;
}

export function RequireUnauth({ children }: RequireUnauthProps) {
  const user = useUserStore((state) => state.user);
  const hasHydrated = useHasHydrated();

  if (!hasHydrated) return <div>Cargando...</div>;

  if (user) {
    const roleRoute = {
      admin: '/admin',
      trainer: '/trainer',
      client: '/client',
    }[user.role!];

    return <Navigate to={roleRoute} replace />;
  }

  return <>{children}</>;
}
