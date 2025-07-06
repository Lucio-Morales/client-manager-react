import { useUserStore } from '../../store/userStore';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Bell,
  CircleDollarSign,
  Dumbbell,
  Home,
  ListTodo,
  LogOut,
  Settings,
  User,
  Users,
} from 'lucide-react';
import clsx from 'clsx';

const navItems = {
  admin: [
    { path: '/admin', label: 'Home', icon: Home },
    { path: '/admin/users', label: 'Users', icon: Users },
    { path: '/admin/settings', label: 'Settings', icon: Settings },
  ],
  trainer: [
    { path: '/trainer', label: 'Home', icon: Home },
    { path: '/trainer/profile', label: 'Profile', icon: User },
    { path: '/trainer/clients', label: 'Clients', icon: Users },
    { path: '/trainer/routines', label: 'Routines', icon: Dumbbell },
    { path: '/trainer/exercises', label: 'Exercises', icon: ListTodo },
    { path: '/trainer/notifications', label: 'Notifications', icon: Bell },
    { path: '/trainer/payments', label: 'Payments', icon: CircleDollarSign },
  ],
  client: [
    { path: '/client', label: 'Home', icon: Home },
    { path: '/client/routine', label: 'Routine', icon: ListTodo },
    { path: '/client/progress', label: 'Progress', icon: BarChart3 },
  ],
};

export default function Sidebar() {
  const { user, logout } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) return null;

  const items = navItems[user.role] || [];

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-400  h-screen sticky top-0 flex flex-col justify-between p-4">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Fit-Admin</h2>
        <nav className="space-y-2">
          {items.map((item: any) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={clsx(
                  'flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-800 ',
                  location.pathname === item.path
                    ? 'bg-blue-200 dark:bg-blue-700 font-semibold'
                    : 'text-gray-700 dark:text-gray-300'
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
