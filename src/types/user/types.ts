export type Role = 'admin' | 'trainer' | 'client';

export interface TrainerProfile {
  id: string;
  name: string;
  email: string;
  bio: string;
  specialities: string[];
  available: boolean;
  avatar: string;
}
