import { ClientTableRowProps } from '../../../types/client/types';

// Extendemos las props para incluir los anchos de columna
interface ClientTableRowPropsWithWidths extends ClientTableRowProps {
  columnWidths: {
    name: string;
    email: string;
    phone: string;
    address: string;
    actions: string;
  };
}

const ClientTableRow: React.FC<ClientTableRowPropsWithWidths> = ({ client, columnWidths }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-3 px-6 text-left whitespace-nowrap text-lg" style={{ width: columnWidths.name }}>
        <div className="flex items-center">
          <span className="font-medium">{client.name}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left text-lg" style={{ width: columnWidths.email }}>
        <span>{client.email}</span>
      </td>
      <td className="py-3 px-6 text-left text-lg" style={{ width: columnWidths.phone }}>
        <span>{client.phone}</span>
      </td>
      <td className="py-3 px-6 text-left text-lg" style={{ width: columnWidths.address }}>
        <span>{client.address}</span>
      </td>
      <td className="py-3 px-6 text-center" style={{ width: columnWidths.actions }}>
        {/* Agregamos mb-2 (margin-bottom) al botón "Editar" */}
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-md cursor-pointer mb-2">
          Editar
        </button>
        {/* No es necesario agregar mr-2 a este botón si están apilados verticalmente */}
        <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-md cursor-pointer">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ClientTableRow;
