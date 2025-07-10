import axios from '../../../api/axios';
import { Client } from '../../../types/client/types';
import { TrainerProfile } from '../../../types/user/types';

export const fetchTrainerProfile = async (): Promise<TrainerProfile> => {
  try {
    const response = await axios.get<{ profile: TrainerProfile }>('/trainer/profile');
    return response.data.profile;
  } catch (error: any) {
    console.error('Error al obtener el perfil del entrenador:', error);
    throw new Error(error?.response?.data?.message || 'No se pudo obtener el perfil.');
  }
};

export const searchUsers = async (query: string): Promise<Client[]> => {
  if (!query || query.trim().length < 2) return [];
  try {
    const response = await axios.get('/client/search', {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.log('Error al buscar clientes:', error);
    return [];
  }
};

export const sendInvitation = async (clientId: string): Promise<void> => {
  await axios.post('/client/invitate', {
    clientId,
  });
};
