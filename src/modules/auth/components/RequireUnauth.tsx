import { Navigate } from 'react-router-dom';
import { useUserStore } from '../../../store/userStore';
import { useHasHydrated } from '../../../hooks/useHasHydrated';

interface RequireUnauthProps {
  children: React.ReactNode;
}

const roleRouteMap = {
  admin: '/admin',
  trainer: '/trainer',
  client: '/client',
} as const;

export function RequireUnauth({ children }: RequireUnauthProps) {
  const user = useUserStore((state) => state.user);
  const hasHydrated = useHasHydrated();

  if (!hasHydrated) return <div style={{ height: '100vh', background: '#FAF7F1' }} />;

  if (user) {
    // const roleRoute = {
    //   admin: '/admin',
    //   trainer: '/trainer',
    //   client: '/client',
    // }[user.role!];
    // return <Navigate to={roleRoute} replace />;
    const roleRoute = user.role && roleRouteMap[user.role];

    // Si no hay role, redirijo al login.
    if (!roleRoute) {
      return <Navigate to="/auth/login" replace />;
    }

    // Si el role es valido, redirijo a su dashboard.
    return <Navigate to={roleRoute} replace />;
  }

  // Si no hay usuario, renderizo LoginPage.tsx
  return <>{children}</>;
}
