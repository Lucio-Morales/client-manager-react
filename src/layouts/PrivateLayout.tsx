import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import MobileBar from '../components/layout/MobileBar';
import Sidebar2 from '../components/layout/Sidebar2';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen p-6 gap-6">
      {/* Sidebar Desktop */}
      <div className="hidden md:block">
        <Sidebar2 />
      </div>

      {/* Contenido principal */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Sidebar Mobile (Bottom Nav) */}
      <MobileBar />
    </div>
  );
}
