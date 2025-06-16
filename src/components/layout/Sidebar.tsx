import { useUserStore } from '../../store/userStore';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import clsx from 'clsx';

const navItems = {
  admin: [
    { path: '/admin', label: 'Inicio' },
    { path: '/admin/users', label: 'Users' },
    { path: '/admin/settings', label: 'Settings' },
  ],
  trainer: [
    { path: '/trainer', label: 'Inicio' },
    { path: '/trainer/profile', label: 'Profile' },
    { path: '/trainer/clients', label: 'Clients' },
    { path: '/trainer/routines', label: 'Routines' },
    { path: '/trainer/payments', label: 'Payments' },
  ],
  client: [
    { path: '/client', label: 'Inicio' },
    { path: '/client/routine', label: 'Routine' },
    { path: '/trainer/progress', label: 'Progress' },
  ],
};

export default function Sidebar() {
  const { user, logout } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) return null;

  const items = navItems[user.role] || [];

  const handleLogout = () => {
    logout(); // limpia zustand y localStorage
    navigate('/auth/login');
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 h-screen sticky top-0 flex flex-col justify-between p-4">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">FitAdmin</h2>
        <nav className="space-y-2">
          {items.map((item: any) => (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'block px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-800 transition',
                // location.pathname === item.path
                location.pathname.startsWith(item.path)
                  ? 'bg-blue-200 dark:bg-blue-700 font-semibold'
                  : 'text-gray-700 dark:text-gray-300'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t pt-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 hover:text-red-800 transition cursor-pointer"
        >
          <LogOut size={18} />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
