import { DollarSign, Edit, Eye, Trash2 } from 'lucide-react';
import { ClientTableRowProps } from '../../../types/client/types';

// Extendemos las props para incluir los anchos de columna
interface ClientTableRowPropsWithWidths extends ClientTableRowProps {
  columnWidths: {
    cliente: string;
    estado: string;
    rutina: string;
    pago: string;
    acciones: string;
  };
}

const ClientTableRow: React.FC<ClientTableRowPropsWithWidths> = ({ client, columnWidths }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap text-sm" style={{ width: columnWidths.cliente }}>
        <div className="flex flex-col">
          <span className="font-medium text-black">{client.name}</span>
          <span className="text-xs text-gray-500">{client.email}</span>
          <span className="text-xs text-gray-500">DNI: {client.dni}</span>
        </div>
      </td>

      <td className="py-3 px-6 text-left text-sm" style={{ width: columnWidths.estado }}>
        <div className="relative group w-max cursor-pointer">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full transition-colors
        ${client.status === 'Activo' ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'}
      `}
          >
            {client.status}
          </span>

          {/* Tooltip personalizado */}
          <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-20">
            Cambiar a {client.status === 'Activo' ? 'Inactivo' : 'Activo'}
          </span>
        </div>
      </td>

      <td className="py-3 px-6 text-left text-sm" style={{ width: columnWidths.rutina }}>
        <div className="flex items-center gap-4 relative">
          {/* Ver rutina */}
          <div className="relative group">
            <button className="text-gray-600 hover:text-gray-900 cursor-pointer" aria-label="Ver rutina">
              <Eye size={18} />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-20">
              Ver rutina
            </span>
          </div>

          {/* Editar rutina */}
          <div className="relative group">
            <button className="text-blue-500 hover:text-blue-700 cursor-pointer" aria-label="Editar rutina">
              <Edit size={18} />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-20">
              Editar rutina
            </span>
          </div>
        </div>
      </td>

      <td className="py-3 px-6 text-left text-sm" style={{ width: columnWidths.pago }}>
        <button
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-1.5 px-3 rounded transition cursor-pointer"
          aria-label="Gestionar pago"
        >
          <DollarSign size={16} />
          Gestionar pago
        </button>
      </td>

      <td className="py-3 px-6 text-center" style={{ width: columnWidths.acciones }}>
        <div className="flex items-center justify-center gap-4 relative">
          {/* Botón Editar */}
          <div className="relative group">
            <button className="hover:text-blue-700 text-blue-400 p-1.5 rounded cursor-pointer" aria-label="Editar">
              <Edit size={20} />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-20">
              Editar cliente
            </span>
          </div>

          {/* Botón Eliminar */}
          <div className="relative group">
            <button className="hover:text-red-700 text-red-500 p-1.5 rounded cursor-pointer" aria-label="Eliminar">
              <Trash2 size={20} />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-20">
              Eliminar cliente
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ClientTableRow;
