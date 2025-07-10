import { useState } from 'react';
import { Plus, RefreshCcw, Search } from 'lucide-react';

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
    <div className="w-full bg-white p-4 flex flex-wrap items-center justify-between gap-4 rounded-md border border-gray-200 shadow-sm">
      {/* Botones */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onNewClient}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition cursor-pointer"
        >
          <Plus size={18} />
          Agregar cliente
        </button>
        <button
          onClick={onRefreshClients}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition cursor-pointer"
        >
          <RefreshCcw size={18} />
          Actualizar lista
        </button>
      </div>

      {/* Contador */}
      <div className="text-gray-700 font-medium text-sm sm:text-base">
        Total de Clientes: <span className="text-gray-900 font-semibold">{totalClients}</span>
      </div>

      {/* Barra de búsqueda */}
      <div className="relative w-full sm:w-1/3">
        <input
          type="text"
          placeholder="Buscar clientes..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Buscar clientes"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ClientToolbar;
