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
    { path: '/admin', label: 'Home', icon: Home },
    { path: '/admin/users', label: 'Users', icon: Users },
    { path: '/admin/settings', label: 'Settings', icon: Settings },
    { path: '/admin/payments', label: 'Payments', icon: CircleDollarSign },
  ],
  trainer: [
    { path: '/trainer', label: 'Home', icon: Home },
    { path: '/trainer/profile', label: 'Profile', icon: User },
    { path: '/trainer/clients', label: 'Clients', icon: Users },
    { path: '/trainer/routines', label: 'Routines', icon: Dumbbell },
    { path: '/trainer/exercises', label: 'Exercises', icon: ListTodo },
    { path: '/trainer/notifications', label: 'Notifications', icon: Bell },
  ],
  client: [
    { path: '/client', label: 'Home', icon: Home },
    { path: '/client/profile', label: 'Profile', icon: User },
    { path: '/client/routine', label: 'Routine', icon: ListTodo },
    { path: '/client/nutrition', label: 'Nutrition', icon: Apple },
    { path: '/client/progress', label: 'Progress', icon: BarChart3 },
    { path: '/client/notifications', label: 'Notifications', icon: Bell },
  ],
};
