import { useEffect, useState } from 'react';
import { scheduleService } from '../api/services/scheduleService';
import SearchResultCard from '../components/card/ScheduleCard';
import DestinationHeader from '../components/shared/DestinationHeader';
import { ScheduleModel } from '../model/schedule/schedule.model';

const SearchResult = () => {
  const [scheduleData, setScheduleData] = useState({
    schedules: [] as ScheduleModel[],
    total: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        setLoading(true);
        const data = await scheduleService.getAll();

        console.log(data);

        const schedules = data.schedules.map(
          (schedule: any) => new ScheduleModel(schedule),
        );

        setScheduleData({ schedules, total: data.total });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  if (loading) return <div>Loading schedules...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <DestinationHeader />

      {/* Search Results */}
      <div className="flex flex-col px-4 space-y-4">
        {scheduleData.schedules.map((schedule) => (
          <SearchResultCard key={schedule.id} schedule={schedule} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
