import { ScheduleData } from '../../model/schedule/schedule.interface';
import { ScheduleModel } from '../../model/schedule/schedule.model';

export const scheduleTransformer = {
  single: (data: ScheduleData) => {
    return new ScheduleModel(data);
  },

  list: (data: any[]) => {
    return {
      schedules: Array.isArray(data)
        ? data.map((schedule) => new ScheduleModel(schedule))
        : [],
      total: Array.isArray(data) ? data.length : 0,
    };
  },
};
