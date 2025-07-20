import { useEffect, useState } from 'react';
import { fetchTrainerProfile } from '../api/profile';
import { useUserStore } from '../../../store/userStore';
import { Edit } from 'lucide-react'; // Import the Edit icon

const Profile = () => {
  const profile = useUserStore((state) => state.profile);
  const setProfile = useUserStore((state) => state.setProfile);
  const [loading, setLoading] = useState(!profile);
  const [error, setError] = useState('');

  // Placeholder for edit functionality
  const handleEditClick = () => {
    alert('Funcionalidad de edición aún no implementada.');
    // In a real application, you would navigate to an edit page or open a modal
  };

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
  }, [profile, setProfile]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-full w-full bg-gray-100 dark:bg-zinc-950">
        <p className="text-xl text-gray-700 dark:text-gray-300">Cargando perfil...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-full w-full bg-gray-100 dark:bg-zinc-950">
        <p className="text-xl text-red-600 dark:text-red-400">Error: {error}</p>
      </div>
    );

  return (
    <div className="border border-zinc-800 rounded-lg min-h-full w-full flex justify-center items-start">
      <div className="relative w-full dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300">
        {/* Edit Button */}
        <button
          onClick={handleEditClick}
          className="absolute top-4 right-4 bg-transparent border border-zinc-500 text-zinc-500 font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 shadow-lg z-10  focus:outline-none  cursor-pointer"
          aria-label="Editar perfil"
        >
          <Edit size={20} />
          <span>Editar perfil</span>
        </button>

        {/* Header/Banner Section */}
        <div className="relative h-48 bg-gradient-to-r border-b-2 border-zinc-800 ">
          <div className="absolute bottom-0 left-8 transform translate-y-1/2">
            <img
              src={profile?.avatar || '/default-avatar.png'}
              alt="Avatar"
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Profile Details Section */}
        <div className="p-8 pt-20 space-y-8">
          {/* Name and Contact */}
          <div className="border-b pb-6 border-zinc-800 dark:border-zinc-700">
            <h2 className="text-4xl font-extrabold text-zinc-300 leading-tight">{profile?.name}</h2>
            <p className="text-lg text-zinc-500  mt-2">{profile?.email}</p>
          </div>

          {/* Biography */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-300 mb-3">Biografía</h3>
            <p className="text-zinc-500 leading-relaxed text-lg">
              {profile?.bio || 'Sin biografía disponible. ¡Cuéntanos más sobre ti!'}
            </p>
          </div>

          {/* Specialities */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-300 mb-3">Especialidades</h3>
            {profile?.specialities && profile.specialities.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-400 dark:text-zinc-400 text-lg">
                {profile.specialities.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 border border-zinc-800 p-3 rounded-lg shadow-sm">
                    <span className="text-indigo-600  text-xl">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-zinc-500 dark:text-zinc-400 text-lg italic">
                Aún no has añadido tus especialidades. ¡Es un buen momento para hacerlo!
              </p>
            )}
          </div>

          {/* Availability */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-300 mb-3">Disponibilidad</h3>
            <p
              className={`font-semibold text-lg px-4 py-2 rounded-full border inline-block cursor-pointer ${
                profile?.available
                  ? ' text-green-700 dark:bg-green-900 dark:text-green-300'
                  : ' text-red-700 dark:bg-red-900 dark:text-red-300'
              }`}
            >
              {profile?.available ? '¡Abierto a nuevos clientes!' : 'Actualmente no disponible para nuevos clientes.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
