import { create } from 'zustand';

type Role = 'admin' | 'trainer' | 'client' | null;

interface User {
  id: string;
  role: Role;
}

interface UserStore {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
