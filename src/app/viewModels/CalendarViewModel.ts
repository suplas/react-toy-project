import BaseViewModel from '../viewModels/BaseViewModel'
import CalendarService from '../services/CalendarService'
import { observable, reaction } from 'mobx'

export default class CalenderViewModel extends BaseViewModel {
  constructor(private service: CalendarService) {
    super()
  }

  @observable
  public nowDate: Date = new Date()

  @observable
  public clickedDate: Date = new Date()

  public async setNowDate(date: Date) {
    await this.runWithAwareness(async () => {
      this.nowDate = date
    })
  }

  public async setclickedDate(date: Date) {
    await this.runWithAwareness(async () => {
      this.clickedDate = date
    })
  }

  // const [clickedDate, setClickedDate] = useState<Date>()

  // [nowDate, setNowDate] = useState<Date>(new Date())
}
