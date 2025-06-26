import React from 'react';
import { ClientTableProps } from '../../../types/client/types';
import ClientTableRow from './ClientTableRow';

const ClientTable: React.FC<ClientTableProps> = ({ clients }) => {
  const columnWidths = {
    name: '30%', // Ajusta según el contenido de los nombres
    email: '25%', // Ajusta según el contenido de los emails
    phone: '15%', // Ajusta según el contenido de los teléfonos
    address: '20%', // Ajusta según el contenido de las direcciones
    actions: '10%', // Ajusta según el espacio de los botones
  };
  return (
    <div className="w-full flex-grow flex flex-col rounded-lg shadow-md overflow-hidden bg-white">
      {/* Contenedor del encabezado de la tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal table-fixed">
          {' '}
          {/* Agregamos table-fixed */}
          <thead>
            <tr className=" text-black uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left sticky top-0  z-10" style={{ width: columnWidths.name }}>
                Nombre
              </th>
              <th className="py-3 px-6 text-left sticky top-0  z-10" style={{ width: columnWidths.email }}>
                Email
              </th>
              <th className="py-3 px-6 text-left sticky top-0  z-10" style={{ width: columnWidths.phone }}>
                Teléfono
              </th>
              <th className="py-3 px-6 text-left sticky top-0  z-10" style={{ width: columnWidths.address }}>
                Dirección
              </th>
              <th className="py-3 px-6 text-center sticky top-0  z-10" style={{ width: columnWidths.actions }}>
                Acciones
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Contenedor del cuerpo de la tabla con scroll vertical */}
      <div className="overflow-y-auto flex-grow overflow-x-auto">
        {' '}
        {/* Mantener overflow-x-auto aquí también */}
        <table className="min-w-full leading-normal table-fixed">
          {' '}
          {/* Agregamos table-fixed */}
          <tbody className="text-gray-600">
            {' '}
            {/* Quitamos text-sm/text-lg de aquí, lo maneja ClientTableRow */}
            {clients.length > 0 ? (
              clients.map((client) => <ClientTableRow key={client.id} client={client} columnWidths={columnWidths} />)
            ) : (
              <tr>
                <td colSpan={5} className="py-4 px-6 text-center text-gray-500">
                  No hay clientes para mostrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;
