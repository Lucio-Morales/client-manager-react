import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

import App from '../App';
import LoginPage from '../modules/auth/pages/LoginPage';
import Unauthorized from '../modules/auth/pages/Unauthorized';

import AdminDashboard from '../modules/admin/pages/Dashboard';
import TrainerDashboard from '../modules/trainer/pages/Dashboard';
import ClientDashboard from '../modules/client/pages/Dashboard';

import Settings from '../modules/admin/pages/Settings';
import AuthLayout from '../layouts/AuthLayout';
import RegisterPage from '../modules/auth/pages/RegisterPage';
import MainLayout from '../layouts/PrivateLayout';
import Profile from '../modules/trainer/pages/Profile';
import ClientsList from '../modules/trainer/pages/ClientsList';
import RoutinesList from '../modules/trainer/pages/RoutinesList';
import Payments from '../modules/trainer/pages/Payments';
import Users from '../modules/admin/pages/Users';
import { RequireUnauth } from '../modules/auth/components/RequireUnauth';
import ClientDetail from '../modules/trainer/pages/ClientDetail';
import RoutineEditor from '../modules/trainer/pages/RoutineEditor';
import ClientRoutine from '../modules/client/pages/ClientRoutine';
import Progress from '../modules/client/pages/Progress';
import ExercisesList from '../modules/trainer/pages/Exercises';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 - Página no encontrada</div>,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: (
          <RequireUnauth>
            <LoginPage />
          </RequireUnauth>
        ),
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/unauthorized',
    element: <Unauthorized />,
  },
  {
    element: <ProtectedRoute allowedRoles={['admin']} />,
    children: [
      {
        path: '/admin',
        element: <MainLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: 'dashboard', element: <AdminDashboard /> },
          { path: 'users', element: <Users /> },
          { path: 'settings', element: <Settings /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={['trainer']} />,
    children: [
      {
        path: '/trainer',
        element: <MainLayout />,
        children: [
          { index: true, element: <TrainerDashboard /> },
          { path: '', element: <TrainerDashboard /> },
          { path: 'profile', element: <Profile /> },
          { path: 'clients', element: <ClientsList /> },
          { path: 'clients/:id', element: <ClientDetail /> },
          { path: 'routines', element: <RoutinesList /> },
          { path: 'exercises', element: <ExercisesList /> },
          { path: 'routines/:id', element: <RoutineEditor /> },
          { path: 'payments', element: <Payments /> },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={['client']} />,
    children: [
      {
        path: '/client',
        element: <MainLayout />,
        children: [
          { index: true, element: <ClientDashboard /> },
          { path: '', element: <ClientDashboard /> },
          { path: 'routine', element: <ClientRoutine /> },
          { path: 'progress', element: <Progress /> },
        ],
      },
    ],
  },
]);
