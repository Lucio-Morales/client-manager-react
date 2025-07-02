import { Role } from '../user/types';

export interface Post {
  id: string;
  user: {
    name: string;
    role: Role;
  };
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
  reposts: number;
}
