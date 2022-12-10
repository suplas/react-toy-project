import BaseViewModel from '../viewModels/BaseViewModel'
import CalendarService from '../services/CalendarService'
import { observable, action, makeObservable } from 'mobx'

export default class CalenderViewModel extends BaseViewModel {
  @observable nowDate: Date = new Date()
  @observable clickedDate: Date = new Date()
  @observable allDay: Date[] = []
  @observable weeks: string[] = ['일', '월', '화', '수', '목', '금', '토']

  constructor(private service: CalendarService) {
    super()
    makeObservable(this)
    this.monthList(this.nowDate)
  }

  @action
  setclickedDate = (date: Date) => {
    if (date === undefined || date === null) {
      return
    }
    try {
      this.clickedDate = date
      this.monthList(this.nowDate)
    } catch (e) {
      console.error(e)
    }
  }

  @action
  changeYear = (change: number) => {
    const date: Date = new Date(this.nowDate.getTime())
    date.setFullYear(date.getFullYear() + change)
    this.setNowDate(date)
  }

  @action
  changeMonth = (change: number) => {
    const date: Date = new Date(this.nowDate.getTime())
    date.setMonth(date.getMonth() + change)
    this.setNowDate(date)
  }

  private setNowDate = (date: Date) => {
    if (date === undefined || date === null) {
      return
    }
    try {
      this.nowDate = date
      this.monthList(this.nowDate)
    } catch (e) {
      console.error(e)
    }
  }

  private monthList = (nowDate: Date) => {
    const nowYear = nowDate.getFullYear()
    const nowMonth = nowDate.getMonth()

    const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay()
    const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay()

    const result: Date[] = []
    const prevMonthEnd = new Date(nowYear, nowMonth, 0).getDate()
    const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate()

    for (let i = dayOneWeek - 1; i >= 0; i--) {
      result.push(new Date(nowYear, nowMonth - 1, prevMonthEnd - i))
    }

    for (let i = 1; i <= nowMonthEnd; i++) {
      result.push(new Date(nowYear, nowMonth, i))
    }

    for (let i = 1; i < 7 - dayLastWeek; i++) {
      result.push(new Date(nowYear, nowMonth + 1, i))
    }

    this.allDay = result
  }
}
