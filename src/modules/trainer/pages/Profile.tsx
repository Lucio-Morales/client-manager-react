import { useEffect, useState } from 'react';
import { fetchTrainerProfile } from '../api/profile';
import { useUserStore } from '../../../store/userStore';

const Profile = () => {
  const profile = useUserStore((state) => state.profile);
  const setProfile = useUserStore((state) => state.setProfile);
  const [loading, setLoading] = useState(!profile);
  const [error, setError] = useState('');

  useEffect(() => {
    if (profile) return;
    const loadProfile = async () => {
      try {
        const fetched = await fetchTrainerProfile();
        setProfile(fetched);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-md space-y-6">
      <div className="flex items-center space-x-4">
        <img
          src={profile?.avatar || '/default-avatar.png'}
          alt="Avatar"
          className="w-20 h-20 rounded-full object-cover border border-zinc-300 dark:border-zinc-700"
        />
        <div>
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">{profile?.name}</h2>
          <p className="text-zinc-500 dark:text-zinc-400">{profile?.email}</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">Biografía</h3>
        <p className="text-zinc-600 dark:text-zinc-400">{profile?.bio || 'Sin biografía disponible.'}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">Especialidades</h3>
        {profile?.specialities.length ? (
          <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400">
            {profile.specialities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-zinc-500">Sin especialidades definidas.</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">Disponibilidad</h3>
        <p className={`font-medium ${profile?.available ? 'text-green-600' : 'text-red-600'}`}>
          {profile?.available ? 'Disponible para nuevos clientes' : 'No disponible actualmente'}
        </p>
      </div>
    </div>
  );
};

export default Profile;
