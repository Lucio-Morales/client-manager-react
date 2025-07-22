import { useUserStore } from '../../store/userStore';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { NavItem } from '../../types/ui/nav';
import { navItems } from '../../constants/navItems';
import { Dumbbell, LogOut } from 'lucide-react';

export default function Sidebar() {
  const { user, logout } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) return null;

  const items: NavItem[] = navItems[user.role] || [];

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800  h-screen sticky top-0 flex flex-col justify-between p-4">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <Dumbbell size={24} strokeWidth={2} className="text-indigo-700" /> {/* Usa el componente del icono */}
          Fit-Admin
        </h2>
        <nav className="space-y-2">
          {items.map((item: any) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  'flex items-center gap-2 px-4 py-2 rounded hover:bg-zinc-800 ',
                  location.pathname === item.path ? 'bg-zinc-800 text-gray-200' : 'text-gray-200 dark:text-gray-300'
                )}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-gray-400 pt-4">
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
