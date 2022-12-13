import BaseViewModel from '../viewModels/BaseViewModel'
import CalendarService from '../services/CalendarService'

export default class CalenderViewModel extends BaseViewModel {
  constructor(private service: CalendarService) {
    super()
  }
}
