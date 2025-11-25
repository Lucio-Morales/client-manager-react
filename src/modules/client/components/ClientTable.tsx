import React from 'react';
import { ClientTableProps } from '../../../types/client/types';
import TableBody from './TableBody';

const ClientTable: React.FC<ClientTableProps> = ({ clients }) => {
  const columnWidths = {
    cliente: '10%',
    estado: '10%',
    rutina: '10%',
    pago: '10%',
    acciones: '10%',
  };
  return (
    <div className="w-full h-full flex flex-col rounded-xl shadow-md overflow-hidden  border border-gray-300 ">
      <div className="h-full">
        <table className="min-w-full leading-normal table-fixed">
          <thead className="bg-zinc-300 sticky z-10 top-0">
            <tr className="text-zinc-700  uppercase text-sm leading-normal sticky ">
              <th className="py-2 px-6 text-left sticky top-0 z-10 font-medium" style={{ width: columnWidths.cliente }}>
                Cliente
              </th>
              <th className="py-3 px-6 text-left sticky top-0 z-10 font-medium" style={{ width: columnWidths.estado }}>
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
          <TableBody clients={clients} columnWidths={columnWidths} />
        </table>
      </div>
    </div>
  );
};

export default React.memo(ClientTable);
