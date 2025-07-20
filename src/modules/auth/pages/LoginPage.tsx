import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../store/userStore';
import { loginRequest } from '../api/authService';

export default function LoginPage() {
  const { user, login } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate(`/${user.role}/dashboard`, { replace: true });
    }
  }, [user]);

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

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
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="p-6 rounded bg-zinc-900 shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(event) => setUserData({ ...userData, email: event.target.value })}
          required
          className="w-full p-2 border border-zinc-700 mb-2 rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(event) => setUserData({ ...userData, password: event.target.value })}
          required
          className="w-full p-2 border border-zinc-700 mb-2 rounded focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 cursor-pointer"
        >
          Iniciar sesión
        </button>
        <p className="mt-4 text-sm">
          ¿No tenés cuenta?{' '}
          <Link to="/auth/register" className="text-indigo-500 hover:underline ">
            Registrate
          </Link>
        </p>
      </form>
    </div>
  );
}
