// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// type Role = 'admin' | 'trainer' | 'client' | null;

// interface User {
//   id: string;
//   role: Role;
//   name: string;
//   email: string;
// }

// interface UserState {
//   user: User | null;
//   token: string | null;
//   login: (user: User, token: string) => void;
//   logout: () => void;
// }

// export const useUserStore = create<UserState>()(
//   persist(
//     (set) => ({
//       user: null,
//       token: null,
//       login: (user, token) => set({ user, token }),
//       logout: () => {
//         set({ user: null, token: null });
//         localStorage.removeItem('auth-storage');
//       },
//     }),
//     {
//       name: 'auth-storage',
//     }
//   )
// );

// // ¿Que hace persist() ?
// // Le dice a zustand "guardá este estado en el localStorage (por defecto)".
// // {name:'auth-storage'} => Es la clave bajo la cual se guarda en el localStorage,
// // se puede ver en la terminal del navegador => Application => Local Storage.
// store/userStore.ts

// store/userStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Role = 'admin' | 'trainer' | 'client' | null;

interface User {
  id: string;
  role: Role;
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
