import {
  Home,
  Users,
  Settings,
  CircleDollarSign,
  User,
  Dumbbell,
  ListTodo,
  Bell,
  Apple,
  BarChart3,
} from 'lucide-react';
import { NavItem } from '../types/ui/nav';

export const navItems: Record<string, NavItem[]> = {
  admin: [
    { path: '/admin', label: 'Inicio', icon: Home },
    { path: '/admin/users', label: 'Usuarios', icon: Users },
    { path: '/admin/settings', label: 'Configuraciones', icon: Settings },
    { path: '/admin/payments', label: 'Pagos', icon: CircleDollarSign },
  ],
  trainer: [
    // { path: '/trainer', label: 'Inicio', icon: Home },
    { path: '/trainer/profile', label: 'Tu perfil', icon: User },
    { path: '/trainer/clients', label: 'Clientes', icon: Users },
    { path: '/trainer/routines', label: 'Rutinas', icon: Dumbbell },
    { path: '/trainer/exercises', label: 'Ejercicios', icon: ListTodo },
    { path: '/trainer/payments', label: 'Pagos', icon: CircleDollarSign },
    { path: '/trainer/notifications', label: 'Notificaciones', icon: Bell },
  ],
  client: [
    { path: '/client', label: 'Inicio', icon: Home },
    { path: '/client/profile', label: 'Perfil', icon: User },
    { path: '/client/routine', label: 'Rutina', icon: ListTodo },
    { path: '/client/nutrition', label: 'Nutricion', icon: Apple },
    { path: '/client/progress', label: 'Progreso', icon: BarChart3 },
    { path: '/client/notifications', label: 'Notificaciones', icon: Bell },
  ],
};
