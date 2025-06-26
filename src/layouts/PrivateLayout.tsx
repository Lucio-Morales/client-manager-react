import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto ">
        <Outlet />
      </main>
    </div>
  );
}
