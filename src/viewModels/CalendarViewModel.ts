import CalendarService from '../services/CalendarService'
import BaseViewModel from './BaseViewModel'
import ContentItemModel from '../models/CalendarModel'
import { action, makeObservable, observable, runInAction } from 'mobx'

export default class CalenderViewModel extends BaseViewModel {
  private didRequestFail: boolean
  public contentItems: Array<ContentItemModel>
  constructor(private service: CalendarService) {
    super()
    this.didRequestFail = false
    makeObservable(this, {
      contentItems: observable,
      fetchContentList: action,
    })
    this.contentItems = []
  }

  async fetchContentList(clickDate: Date = new Date()) {
    try {
      await this.runWithAwareness(async () => {
        let response = await this.service.getCalendarContentList(clickDate)
        if (response.Fail) {
          this.didRequestFail = true
        } else {
          runInAction(() => {
            this.contentItems = (response.data as Array<ContentItemModel>).map(
              item => new ContentItemModel(item.seq, item.title, item.createHour, item.content),
            )
          })
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}
