import axios from 'axios';

type Role = 'admin' | 'trainer' | 'client' | null;

interface User {
  id: string;
  role: Role;
  name: string;
  email: string;
}

export async function loginRequest(email: string, password: string): Promise<{ user: User; token: string }> {
  const response = await axios.post('http://localhost:3000/auth/login', { email, password });

  console.log('RESPONSE.DATA IS:', response.data);

  return response.data;
}
