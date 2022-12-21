import ContentItemModel from '../models/CalendarModel'
import ServiceInterface from './ServiceInterface'

const url = 'http://localhost:3000'

const headers = {
  'Content-Type': 'application/json',
}

export default class CalendarService {
  private static _instance: CalendarService

  private constructor() {}

  public static get instance() {
    return this._instance ?? (this._instance = new CalendarService())
  }

  public async getCalendarContentList(clickDate: Date): Promise<ServiceInterface<Array<ContentItemModel>>> {
    // try {
    //   let response = await fetch(url, { headers })

    //   if (!response.ok) {
    //     return { Fail: true, failReason: response.statusText }
    //   }

    //   const data = await response.json()

    //   return { Fail: false, data }
    // } catch (e) {
    //   return { Fail: false, failReason: String(e) }
    // }

    try {
      if (!clickDate) {
        return { Fail: true, failReason: 'missing required parameters' }
      }

      const data: any = [
        {
          seq: 1,
          title: '제목 1',
          createHour: new Date(clickDate.getFullYear(), clickDate.getMonth(), clickDate.getDate(), 8, 30),
          content: '본문내용본문내용본문내용\n본문내용본문내용본문내용\n본문내용본문내용본문...',
        },
        {
          seq: 2,
          title: '제목 2',
          createHour: new Date(clickDate.getFullYear(), clickDate.getMonth(), clickDate.getDate(), 10, 40),
          content: '본문내용본문내용본문내용\n본문내용본문내용본문내용\n본문내용본문내용본문...',
        },
        {
          seq: 3,
          title: '제목 3',
          createHour: new Date(clickDate.getFullYear(), clickDate.getMonth(), clickDate.getDate(), 12, 10),
          content: '본문내용본문내용본문내용\n본문내용본문내용본문내용\n본문내용본문내용본문...',
        },
        {
          seq: 4,
          title: '제목 4',
          createHour: new Date(clickDate.getFullYear(), clickDate.getMonth(), clickDate.getDate(), 14, 30),
          content: '본문내용본문내용본문내용\n본문내용본문내용본문내용\n본문내용본문내용본문...',
        },
        {
          seq: 5,
          title: '제목 5',
          createHour: new Date(clickDate.getFullYear(), clickDate.getMonth(), clickDate.getDate(), 21, 20),
          content: '본문내용본문내용본문내용\n본문내용본문내용본문내용\n본문내용본문내용본문...',
        },
      ]

      return { Fail: false, data }
    } catch (e) {
      return { Fail: true, failReason: String(e) }
    }
  }
}
