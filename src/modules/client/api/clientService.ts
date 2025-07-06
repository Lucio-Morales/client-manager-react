import axios from '../../../api/axios';
import { CreateClientFormData } from '../components/CreateClientModal';

export const createClient = async (data: CreateClientFormData) => {
  try {
    const response = await axios.post('/client/create', data);
    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || 'Error al crear el cliente';
    throw new Error(message);
  }
};
