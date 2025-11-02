import React from 'react';
import { ClientTableProps } from '../../../types/client/types';
import ClientTableRow from './ClientTableRow';

const ClientTable: React.FC<ClientTableProps> = ({ clients }) => {
  const columnWidths = {
    cliente: '10%',
    estado: '10%',
    rutina: '10%',
    pago: '10%',
    acciones: '10%',
  };
  return (
    <div className="w-full flex-grow flex flex-col rounded-xl shadow-md overflow-hidden bg-white border border-gray-300 ">
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal table-fixed">
          <thead className="">
            <tr className="text-zinc-700 bg-zinc-100 uppercase text-sm leading-normal  bg-opacity-90 backdrop-blur-md">
              <th className="py-2 px-6 text-left sticky top-0 z-10 font-medium" style={{ width: columnWidths.cliente }}>
                Cliente
              </th>
              <th className="py-3 px-6 text-left sticky top-0  z-10 font-medium" style={{ width: columnWidths.estado }}>
                Estado
              </th>
              <th
                className="py-3 px-6 text-left sticky top-0  z-10
              font-medium"
                style={{ width: columnWidths.rutina }}
              >
                Rutina
              </th>
              <th
                className="py-3 px-6 text-left sticky top-0  z-10
              font-medium"
                style={{ width: columnWidths.pago }}
              >
                Información
              </th>
              <th
                className="py-3 px-6 text-center sticky top-0  z-10 font-medium"
                style={{ width: columnWidths.acciones }}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.length > 0 ? (
              clients.map((client) => <ClientTableRow key={client.id} client={client} columnWidths={columnWidths} />)
            ) : (
              <tr>
                <td colSpan={5} className="py-4 px-6 text-center text-zinc-700">
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

export default React.memo(ClientTable);
