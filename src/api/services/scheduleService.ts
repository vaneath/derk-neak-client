import api from '../core/apiClient';
import { scheduleTransformer } from '../transformers/scheduleTransformer';

const SCHEDULE_ENDPOINT = '/schedules';

export const scheduleService = {
  getAll: async () => {
    try {
      const response = await api.get(SCHEDULE_ENDPOINT);
      console.log('schedule response', response);
      return scheduleTransformer.list(response.data);
    } catch (error) {
      throw error;
    }
  },

  getOneById: async (id: number) => {
    try {
      const response = await api.get(`${SCHEDULE_ENDPOINT}/${id}`);
      return scheduleTransformer.single(response.data);
    } catch (error) {
      throw error;
    }
  },
};
