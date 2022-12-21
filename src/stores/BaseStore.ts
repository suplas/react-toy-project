import { action, makeObservable, observable } from 'mobx'

class BaseStore {
  selectNavigationNumber: Number //footer navigation now number
  mainTitle: string // header now main title
  private titles: string[] // all main title array

  constructor() {
    makeObservable(this, {
      selectNavigationNumber: observable,
      mainTitle: observable,
      SetSelectNavigationNumber: action,
    })
    this.selectNavigationNumber = 1
    this.mainTitle = '달력'
    this.titles = ['홈', '달력', '채팅', '더보기']
  }

  // MAKR: footer menu selet change
  SetSelectNavigationNumber = (ChangNumber: number) => {
    this.selectNavigationNumber = ChangNumber
    this.SetMainTitle(ChangNumber)
  }

  // MAKR: header main title change
  private SetMainTitle = (ChangeTitleNumber: number) => {
    this.mainTitle = this.titles[ChangeTitleNumber]
  }
}

export default BaseStore
