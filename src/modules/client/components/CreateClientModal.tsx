import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { SearchBar } from '../../../components/ui/SearchBar';
import { useEffect, useState } from 'react';
import { Client } from '../../../types/client/types';
import { searchUsers, sendInvitation } from '../../trainer/api/profile';
import { X } from 'lucide-react';

interface CreateClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateClientModal = ({ isOpen, onClose }: CreateClientModalProps) => {
  const [invitedIds, setInvitedIds] = useState<string[]>([]);

  const handleInvite = async (user: Client) => {
    try {
      await sendInvitation(user.id);
      setInvitedIds((prev) => [...prev, user.id]);
    } catch (error) {
      console.error('Error al invitar:', error);
      alert('Hubo un error al enviar la invitación.');
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Fondo opaco */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

      {/* Contenido del modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          className="bg-zinc-800 w-full max-w-xl rounded-xl shadow-lg p-6 border border-zinc-700  space-y-6 relative"
          style={{ minHeight: 420 }}
        >
          {/* Header con título y botón X */}
          <div className="flex justify-between items-start">
            <DialogTitle className="text-lg font-semibold text-zinc-200 ">Buscador de clientes</DialogTitle>
            <button onClick={onClose} className="text-zinc-200  transition cursor-pointer" aria-label="Cerrar">
              <X size={20} />
            </button>
          </div>

          {/* SearchBar con resultados */}
          <SearchBar<Client>
            placeholder="Buscar por nombre, email o DNI"
            searchFn={searchUsers}
            renderResult={(user) => (
              <div
                key={user.id}
                className="flex justify-between items-center border border-zinc-600  rounded-lg p-3 hover:bg-zinc-700 dark:hover:bg-zinc-800 transition"
              >
                <div>
                  <p className="font-medium text-zinc-200">{user.name}</p>
                  <p className="text-sm text-zinc-400">
                    {user.email} — {user.dni}
                  </p>
                </div>
                <button
                  className="text-sm px-3 py-1 rounded bg-indigo-600 text-white  disabled:bg-gray-400 cursor-pointer"
                  disabled={invitedIds.includes(user.id)}
                  onClick={() => handleInvite(user)}
                >
                  Agregar a mi lista
                  {/* {invitedIds.includes(user.id) ? 'Invitado' : 'Invitar'} */}
                </button>
              </div>
            )}
            isOpen={isOpen}
          />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CreateClientModal;
