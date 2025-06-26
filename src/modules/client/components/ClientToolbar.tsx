import { useState } from 'react';

interface ClientToolbarProps {
  totalClients: number;
  onSearch: (searchTerm: string) => void;
  onNewClient: () => void;
  onRefreshClients: () => void;
}

const ClientToolbar: React.FC<ClientToolbarProps> = ({ totalClients, onSearch, onNewClient, onRefreshClients }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="w-full bg-white p-4 mb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Sección de Botones de Acción */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onNewClient}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 ease-in-out text-md"
        >
          <i className="fas fa-plus mr-2"></i> Nuevo Cliente
        </button>
        <button
          onClick={onRefreshClients}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 ease-in-out text-md"
        >
          <i className="fas fa-sync-alt mr-2"></i> Actualizar Lista
        </button>
      </div>

      {/* Contador de Clientes */}
      <div className="text-gray-700 font-semibold text-md">
        Total de Clientes: <span className="text-lg text-gray-900">{totalClients}</span>
      </div>

      {/* Barra de Búsqueda */}
      <div className="relative w-full sm:w-1/3">
        <input
          type="text"
          placeholder="Buscar clientes..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="fas fa-search text-gray-400"></i>
        </div>
      </div>
    </div>
  );
};

export default ClientToolbar;
