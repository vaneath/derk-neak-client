export interface ScheduleData {
  id: string;
  departureDate: Date;
  departureTime: string;
  returnDate: Date | null;
  returnTime: string;
  tripDuration: string;
  isRoundTrip: boolean;
  bus: string;
  route: { departureStation: string; arrivalStation: string };
  tickets: any[];
}
