import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import MobileBar from '../components/layout/MobileBar';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Contenido principal */}
      <main className="flex-1 p-6 overflow-y-auto pb-16 md:pb-6">
        <Outlet />
      </main>

      {/* Sidebar Mobile (Bottom Nav) */}
      <MobileBar />
    </div>
  );
}
