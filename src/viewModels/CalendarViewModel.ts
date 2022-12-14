import CalendarService from '../services/CalendarService'

export default class CalenderViewModel {
  constructor(private service: CalendarService) {
    this.service = service
  }
  
}
