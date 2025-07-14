import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../api/authService';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dni: '',
    password: '',
    role: '',
  });

  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // setError(null);
    try {
      const { success } = await registerRequest(
        formData.name,
        formData.email,
        formData.dni,
        formData.password,
        formData.role as 'trainer' | 'client'
      );

      console.log('success:', success);

      if (success) {
        setRegistered(true);
        setFormData({ name: '', email: '', dni: '', password: '', role: '' });
      } else {
        setError('Ocurrió un error al registrar.');
      }
    } catch (error: any) {
      setError(error.message || 'Error desconocido.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {loading ? (
        <p className="text-lg font-medium">Loading...</p>
      ) : registered ? (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
          <h2 className="text-xl font-semibold mb-4">Registro exitoso 🎉</h2>
          <button
            onClick={() => navigate('/auth/login')}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Ingresar
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-4">Registrarse</h2>

          {error && <p className="text-red-600 mb-2 text-sm">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Nombre y apellido"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border mb-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border mb-2 rounded"
          />

          <input
            type="text"
            name="dni"
            placeholder="DNI"
            value={formData.dni}
            onChange={handleChange}
            required
            className="w-full p-2 border mb-2 rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border mb-2 rounded"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full p-2 border mb-4 rounded"
          >
            <option value="" disabled hidden>
              Seleccioná un rol
            </option>
            <option value="trainer">Entrenador</option>
            <option value="client">Cliente</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Crear cuenta
          </button>

          <p className="mt-4 text-sm">
            ¿Ya tenés cuenta?{' '}
            <Link to="/auth/login" className="text-blue-600 hover:underline">
              Iniciá sesión
            </Link>
          </p>
        </form>
      )}
    </div>
  );
}
