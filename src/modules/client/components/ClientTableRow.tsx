import { Edit, Eye, Mail, MessageCircle, MessageSquare, Search, Trash2 } from 'lucide-react';
import { ClientTableRowProps } from '../../../types/client/types';
import SpanInfo from '../../../components/ui/shared/SpanInfo';

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
    <tr className="border-b border-gray-300 hover:bg-zinc-100 cursor-pointer">
      <td className="py-3 px-6 text-left whitespace-nowrap text-sm" style={{ width: columnWidths.cliente }}>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-zinc-800">{client.name}</span>
          <span className="text-sm text-zinc-600">{client.email}</span>
          <span className="text-xs font-medium text-gray-600  ">DNI: {client.dni}</span>
        </div>
      </td>

      <td className="py-3 px-6 text-left text-sm" style={{ width: columnWidths.estado }}>
        <div className="relative group w-max cursor-pointer">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full transition-colors border 
        ${
          client.status === 'Activo'
            ? 'text-green-800 border-green-800 hover:bg-green-100 '
            : 'text-red-800 border-red-800 hover:bg-red-100 '
        }
      `}
          >
            {client.status}
          </span>

          {/* Tooltip personalizado */}
          <SpanInfo label={`Cambiar a ${client.status === 'Activo' ? 'Inactivo' : 'Activo'}`} />
        </div>
      </td>

      <td className="py-3 px-6 text-left text-sm" style={{ width: columnWidths.rutina }}>
        <div className="flex items-center gap-4 relative">
          {/* Ver rutina */}
          <div className="relative group">
            <button className="text-zinc-700 hover:text-zinc-800 cursor-pointer" aria-label="Ver rutina">
              <Eye size={18} />
            </button>
            <SpanInfo label={'Ver rutina'} />
          </div>

          {/* Editar rutina */}
          <div className="relative group">
            <button className="text-black cursor-pointer" aria-label="Editar rutina">
              <Edit size={18} />
            </button>
            <SpanInfo label={'Editar rutina'} />
          </div>
        </div>
      </td>

      <td className="py-3 px-6 text-left text-sm" style={{ width: columnWidths.pago }}>
        <button
          className="flex items-center gap-2 bg-zinc-800 shadow-md hover:bg-zinc-900 text-white font-medium py-1.5 px-3 rounded-xl transition duration-200 cursor-pointer"
          aria-label="Gestionar pago"
        >
          <Search size={16} />
          Info del cliente
        </button>
      </td>

      <td className="py-3 px-6 text-center" style={{ width: columnWidths.acciones }}>
        <div className="flex items-center justify-center gap-4 relative">
          {/* Botón enviar mensaje */}
          <div className="relative group">
            <button
              className="text-blue-800 hover:text-blue-700 p-1.5 rounded cursor-pointer"
              aria-label="Enviar mensaje"
            >
              <Mail size={20} />
            </button>
            <SpanInfo label={'Enviar mensaje'} />
          </div>

          {/* Botón eliminar */}
          <div className="relative group">
            <button className="hover:text-red-700 text-red-800 p-1.5 rounded cursor-pointer" aria-label="Eliminar">
              <Trash2 size={20} />
            </button>
            <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-zinc-700 text-white text-xs rounded-xl py-1 px-2 whitespace-nowrap z-20">
              Quitar de la lista
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ClientTableRow;
