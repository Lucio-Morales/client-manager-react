import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

import App from '../App';
import LoginPage from '../modules/auth/pages/LoginPage';
import Unauthorized from '../modules/auth/pages/Unauthorized';

import AdminLayout from '../layouts/AdminLayout';
import TrainerLayout from '../layouts/TrainerLayout';
import ClientLayout from '../layouts/ClientLayout';

import AdminDashboard from '../modules/admin/pages/Dashboard';
import TrainerDashboard from '../modules/trainer/pages/Dashboard';
import ClientDashboard from '../modules/client/pages/Dashboard';

import Settings from '../modules/admin/pages/Settings';
import AuthLayout from '../layouts/AuthLayout';
import RegisterPage from '../modules/auth/pages/RegisterPage';

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
        element: <LoginPage />,
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
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
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
        element: <TrainerLayout />,
        children: [{ index: true, element: <TrainerDashboard /> }],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={['client']} />,
    children: [
      {
        path: '/client',
        element: <ClientLayout />,
        children: [{ index: true, element: <ClientDashboard /> }],
      },
    ],
  },
]);
