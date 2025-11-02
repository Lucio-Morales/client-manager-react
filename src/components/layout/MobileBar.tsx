import { useUserStore } from '../../store/userStore';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { navItems } from '../../constants/navItems';
import { NavItem } from '../../types/ui/nav';
import { LogOut } from 'lucide-react';

export default function MobileBar() {
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
    <nav className="fixed bottom-0 left-0 w-full bg-zinc-900 border-t border-zinc-800 flex justify-around items-center py-3 md:hidden z-50">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={clsx(
              'flex flex-col items-center text-xs transition-colors',
              isActive ? 'text-indigo-500' : 'text-gray-400 hover:text-gray-200'
            )}
          >
            <Icon size={26} />
          </Link>
        );
      })}

      {/* Separador visual */}
      <div className="w-px h-8 bg-zinc-700 mx-2"></div>

      {/* Botón de logout */}
      <button
        onClick={handleLogout}
        className="flex flex-col items-center text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
      >
        <LogOut size={26} />
      </button>
    </nav>
  );
}
