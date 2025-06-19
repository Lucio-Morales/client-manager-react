import axios from '../../../api/axios';
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
