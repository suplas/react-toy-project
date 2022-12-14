import { makeObservable, observable, action } from 'mobx'

class CalendarStore {
  nowDate: Date
  clickedDate: Date
  allDay: Date[]
  weeks: string[]

  constructor() {
    makeObservable(this, {
      nowDate: observable,
      clickedDate: observable,
      allDay: observable,
      weeks: observable,
      setclickedDate: action,
      changeYear: action,
      changeMonth: action,
      dateFormat: action,
      contentTitleDateFormat: action,
    })
    this.nowDate = new Date()
    this.clickedDate = new Date()
    this.allDay = []
    this.weeks = ['일', '월', '화', '수', '목', '금', '토']
    this.monthList(this.nowDate)
  }

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

  changeYear = (change: number) => {
    const date: Date = new Date(this.nowDate.getTime())
    date.setFullYear(date.getFullYear() + change)
    this.setNowDate(date)
  }

  changeMonth = (change: number) => {
    const date: Date = new Date(this.nowDate.getTime())
    date.setMonth(date.getMonth() + change)
    this.setNowDate(date)
  }

  contentTitleDateFormat = (date: Date = this.clickedDate) => {
    const result: string =  this.dateFormat(date, 'w')+', '+this.dateFormat(date, 'm')+'월 '+
    this.dateFormat(date, 'd')+'일, '+this.dateFormat(date, 'y')

    return result
  }

  dateFormat = (date: Date, type: string = 'ymd') => {
    const year = date.getFullYear()
    const month = (date.getMonth() +1)
    const day = (date.getDate())
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const week = this.weeks[(date.getDay())]+'요일';

    const ymd = year+'년'+month+'월'+day+'일'
    const ymdhis = year+'년'+month+'월'+day+'일 '+hour+'시'+minute+'분'+second+'초'

    let result;

    switch(type){
      case 'ymd': result = ymd; break;
      case 'ymdhis': result = ymdhis; break;
      case 'y': result = year; break;
      case 'm': result = month; break;
      case 'd': result = day; break;
      case 'h': result = hour; break;
      case 'i': result = minute; break;
      case 's': result = second; break;
      case 'w' : result = week; break;
      default : result = ymd; break;
    }
    
    return result
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

export default CalendarStore
