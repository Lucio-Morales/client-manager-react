import ClientTableRow from './ClientTableRow';

const TableBody = ({ clients, columnWidths }) => {
  return (
    <tbody className="bg-white">
      {clients.length > 0 ? (
        clients.map((client: any) => <ClientTableRow key={client.id} client={client} columnWidths={columnWidths} />)
      ) : (
        <tr>
          <td colSpan={5} className="py-4 px-6 text-center text-zinc-700">
            No hay clientes para mostrar.
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TableBody;
