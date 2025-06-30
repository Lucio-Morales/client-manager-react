export interface Client {
  id: string;
  name: string;
  dni: string;
  email: string;
  phone: string;
  address: string;
  goals?: string;
  fitnes_level?: string;
  status?: string;
}

export interface ClientTableProps {
  clients: Client[];
}

export interface ClientTableRowProps {
  client: Client;
}
