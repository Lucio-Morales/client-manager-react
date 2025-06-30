import { useCallback, useEffect, useMemo, useState } from 'react';
import { Client } from '../../../types/client/types';
import ClientTable from '../../client/components/ClientTable';
import ClientToolbar from '../../client/components/ClientToolbar';

const ClientsList = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Simular la obtención de datos de una API
    const fetchClients = async () => {
      try {
        setLoading(true);
        // En una aplicación real, reemplaza esto con tu llamada real a la API
        const mockClients: Client[] = [
          {
            id: '1',
            name: 'Juan Perez',
            dni: '123',
            status: 'Activo',
            email: 'juan.perez@example.com',
            phone: '123-456-7890',
            address: 'Calle Falsa 123',
          },
          {
            id: '2',
            name: 'Maria Garcia',
            dni: '456',
            status: 'Activo',
            email: 'maria.garcia@example.com',
            phone: '098-765-4321',
            address: 'Avenida Siempre Viva 456',
          },
          {
            id: '3',
            name: 'Carlos Lopez',
            dni: '789',
            status: 'Inactivo',
            email: 'carlos.lopez@example.com',
            phone: '555-123-4567',
            address: 'Boulevard de los Sueños 789',
          },
          {
            id: '4',
            name: 'Ana Rodríguez',
            dni: '135',
            status: 'Activo',
            email: 'ana.rodriguez@example.com',
            phone: '111-222-3333',
            address: 'Calle del Sol 10',
          },
          {
            id: '5',
            name: 'Pedro Gómez',
            dni: '246',
            status: 'Inactivo',
            email: 'pedro.gomez@example.com',
            phone: '444-555-6666',
            address: 'Avenida de la Luna 20',
          },
          {
            id: '6',
            name: 'Laura Fernández',
            dni: '790',
            status: 'Activo',
            email: 'laura.fernandez@example.com',
            phone: '777-888-9999',
            address: 'Plaza Mayor 30',
          },
          {
            id: '7',
            name: 'Roberto Díaz',
            dni: '112',
            status: 'Activo',
            email: 'roberto.diaz@example.com',
            phone: '222-333-4444',
            address: 'Parque Central 50',
          },
          {
            id: '8',
            name: 'Sofía Martínez',
            dni: '113',
            status: 'Activo',
            email: 'sofia.martinez@example.com',
            phone: '999-000-1111',
            address: 'Ruta de la Montaña 60',
          },
          {
            id: '9',
            name: 'Gabriel Sánchez',
            dni: '114',
            status: 'Activo',
            email: 'gabriel.sanchez@example.com',
            phone: '333-444-5555',
            address: 'Camino del Río 70',
          },
          {
            id: '10',
            name: 'Valeria Castro',
            dni: '115',
            status: 'Inactivo',
            email: 'valeria.castro@example.com',
            phone: '666-777-8888',
            address: 'Bosque Escondido 80',
          },
        ];
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simular retraso de red
        setClients(mockClients);
      } catch (err) {
        setError('Error al cargar los clientes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const results = clients.filter(
      (client) =>
        client.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        client.email.toLowerCase().includes(lowerCaseSearchTerm) ||
        client.phone.includes(lowerCaseSearchTerm) || // El teléfono puede no necesitar toLowerCase si solo son números
        client.address.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredClients(results);
  }, [clients, searchTerm]);

  // Manejador para la búsqueda
  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  // Manejador para el botón "Nuevo Cliente"
  const handleNewClient = useCallback(() => {
    alert('¡Acción: Crear nuevo cliente!');
    // Aquí iría la lógica para navegar a un formulario de creación o abrir un modal
  }, []);

  // Manejador para el botón "Actualizar Lista"
  // const handleRefreshClients = useCallback(() => {
  //   fetchClients(); // Vuelve a cargar los datos
  // }, [fetchClients]);
  const handleRefreshClients = () => {
    alert('Refetch de clients'); // Vuelve a cargar los datos
  };

  // El total de clientes filtrados, memoizado para evitar recálculos innecesarios
  const totalFilteredClients = useMemo(() => filteredClients.length, [filteredClients]);

  return (
    <div className="min-h-full w-full flex flex-col items-center shadow-lg">
      {!loading &&
        !error && ( // Solo muestra la barra si no está cargando ni hay error
          <ClientToolbar
            totalClients={totalFilteredClients} // Muestra el total de clientes DESPUÉS de aplicar filtros
            onSearch={handleSearch}
            onNewClient={handleNewClient}
            onRefreshClients={handleRefreshClients}
          />
        )}
      {loading && (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          <span className="ml-3 text-lg text-gray-700">Cargando clientes...</span>
        </div>
      )}

      {error && (
        <div className="text-red-600 bg-red-100 border border-red-400 rounded p-4 mb-4">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="w-full flex-grow flex flex-col overflow-hidden">
          <ClientTable clients={clients} />
        </div>
      )}
    </div>
  );
};

export default ClientsList;
