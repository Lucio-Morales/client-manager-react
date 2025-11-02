import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md ">
        <h1 className="text-4xl font-extrabold text-gray-400 dark:text-white">
          Bienvenido a <span className="text-indigo-500">FitAdmin</span>
        </h1>
        <p className="text-lg text-gray-400 dark:text-gray-300">
          Por favor, iniciá sesión o registrate para continuar.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/auth/login"
            className="px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Iniciar sesión
          </Link>
          <Link
            to="/auth/register"
            className="px-6 py-2 rounded-xl border border-indigo-700 text-white hover:bg-indigo-700 dark:hover:bg-neutral-800 transition-colors"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
