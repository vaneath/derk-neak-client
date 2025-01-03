import { ScheduleData } from './schedule.interface';
import { format } from 'date-fns';

export class ScheduleModel implements ScheduleData {
  id: string;
  departureDate: Date | null;
  departureTime: string;
  returnDate: Date | null;
  returnTime: string;
  tripDuration: string;
  isRoundTrip: boolean;
  bus: string;
  route: {
    departureStation: string;
    arrivalStation: string;
  };
  tickets: any[];

  constructor(data: ScheduleData) {
    this.id = data.id;
    this.departureDate = data.departureDate
      ? new Date(data.departureDate)
      : null;
    this.departureTime = data.departureTime;
    this.returnDate = data.returnDate ? new Date(data.returnDate) : null;
    this.returnTime = data.returnTime;
    this.tripDuration = data.tripDuration;
    this.isRoundTrip = data.isRoundTrip;
    this.bus = data.bus;
    this.route = data.route;
    this.tickets = data.tickets || [];
  }

  getFormattedDepartureDate() {
    return this.departureDate
      ? format(this.departureDate, 'EEEE MMM d yyyy')
      : null;
  }

  getFormattedReturnDate() {
    return this.returnDate ? format(this.returnDate, 'EEEE MMM d yyyy') : null;
  }

  getTotalTickets() {
    return this.tickets.length;
  }
}
