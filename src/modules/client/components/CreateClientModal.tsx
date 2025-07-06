import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const createClientSchema = z.object({
  name: z.string().min(2, 'El nomnbre debe tener al menos 2 caracteres.'),
  dni: z.string().min(1, 'El DNI es obligatorio').regex(/^\d+$/, 'El DNI debe contener solo números'),
  email: z.string().email('Correo invalido'),
  phone: z.string().optional(),
});

export type CreateClientFormData = z.infer<typeof createClientSchema>;

interface CreateClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateClientModal = ({ isOpen, onClose }: CreateClientModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateClientFormData>({
    resolver: zodResolver(createClientSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = (data: CreateClientFormData) => {
    setLoading(true);
    console.log('Datos enviados:', data);
    setTimeout(() => {
      setLoading(false);
      reset();
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white dark:bg-zinc-900 p-6 rounded-2xl w-full max-w-md shadow-xl">
          <DialogTitle className="text-xl font-semibold mb-4">Nuevo Cliente</DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <input
                {...register('name')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              />
              {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">DNI</label>
              <input
                {...register('dni')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              />
              {errors.dni && <p className="text-sm text-red-600">{errors.dni.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              />
              {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Teléfono</label>
              <input
                {...register('phone')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              />
              {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
              >
                {loading ? 'Creando...' : 'Crear Cliente'}
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default CreateClientModal;
