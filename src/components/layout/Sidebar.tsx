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
    <aside className="w-58 border-r bg-white border-gray-300  h-screen sticky top-0 flex flex-col justify-between p-4">
      <div>
        <span className="text-xl bg-zinc-300 rounded-full p-2 italic text-zinc-800 font-semibold mb-6 flex items-center justify-start gap-3">
          <Dumbbell size={32} strokeWidth={1} className="bg-zinc-800 text-white rounded-full p-1" />
          Fit-Admin
        </span>
        <nav className="space-y-2">
          {items.map((item: any) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  'flex font-medium text-sm items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 ',
                  location.pathname === item.path ? 'bg-gray-200 text-zinc-600' : ' dark:text-zinc-600'
                )}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-gray-300 pt-4">
        <button
          onClick={handleLogout}
          className="w-full text-sm flex items-center justify-center gap-2 px-4 py-2 text-red-600 hover:text-red-800 transition cursor-pointer"
        >
          <LogOut size={18} />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}
