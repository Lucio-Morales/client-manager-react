import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TrainerProfile } from '../types/user/types';

type Role = 'admin' | 'trainer' | 'client';

interface User {
  id: string;
  role: Role;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  profile: TrainerProfile | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  setProfile: (profile: TrainerProfile) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      profile: null,
      login: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null, profile: null }),
      setProfile: (profile) => set({ profile }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
