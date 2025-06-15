import axios from 'axios';

type Role = 'admin' | 'trainer' | 'client' | null;

interface User {
  id: string;
  role: Role;
  name: string;
  email: string;
}

export async function registerRequest(
  name: string,
  email: string,
  password: string,
  role: Role
): Promise<{ success: boolean; user: User }> {
  const response = await axios.post('http://localhost:3000/auth/register', {
    name,
    email,
    password,
    role,
  });

  console.log('REGISTER RESPONSE DATA:', response.data);

  return response.data;
}

export async function loginRequest(email: string, password: string): Promise<{ user: User; token: string }> {
  const response = await axios.post('http://localhost:3000/auth/login', { email, password });

  console.log('RESPONSE.DATA IS:', response.data);

  return response.data;
}
