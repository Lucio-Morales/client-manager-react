import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/userStore';
import { loginRequest } from '../api/authService';

export default function LoginPage() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { token, user } = await loginRequest(userData.email, userData.password);
      login(user, token);

      navigate(`/${user.role}`);
    } catch (error: any) {
      console.log('Error al iniciar sesion', error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(event) => setUserData({ ...userData, email: event.target.value })}
          required
          className="w-full p-2 border mb-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(event) => setUserData({ ...userData, password: event.target.value })}
          required
          className="w-full p-2 border mb-2 rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
          Iniciar sesión
        </button>
        <p className="mt-4 text-sm">
          ¿No tenés cuenta?{' '}
          <Link to="/auth/register" className="text-blue-600 hover:underline">
            Registrate
          </Link>
        </p>
      </form>
    </div>
  );
}
