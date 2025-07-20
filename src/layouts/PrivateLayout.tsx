import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen text-indigo-500">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto ">
        <Outlet />
      </main>
    </div>
  );
}
