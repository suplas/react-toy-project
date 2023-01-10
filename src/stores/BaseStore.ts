import { action, makeObservable, observable } from 'mobx'
import router from 'next/router'

class BaseStore {
  selectNavigationNumber: Number //footer navigation now number
  mainTitle: string // header now main title
  pageTitle: string
  private titles: string[] // all main title array

  constructor() {
    makeObservable(this, {
      selectNavigationNumber: observable,
      mainTitle: observable,
      pageTitle: observable,
      SetNavigationChange: action,
      PageChange: action,
      PageBack: action,
    })
    this.selectNavigationNumber = 1
    this.mainTitle = '달력'
    this.titles = ['홈', '달력', '채팅', '더보기']
    this.pageTitle = ''
  }

  // MARK: footer menu selet change
  SetNavigationChange = (changNumber: number) => {
    if (this.selectNavigationNumber === changNumber) {
      return
    }

    this.selectNavigationNumber = changNumber
    this.MainTitle(changNumber)

    switch (this.selectNavigationNumber) {
      case 0:
        this.PageChange('/')
        break
      case 1:
        this.PageChange('/calendar')
        break
      case 2:
        this.PageChange('/')
        break
      case 3:
        this.PageChange('/')
        break
    }
  }

  // MARK page cahnge router
  PageChange = (changePage: string = '/', pageTitle?: string, props?: any, pageName: string = '') => {
    if (pageName === '' || pageName === undefined) {
      pageName = changePage
    }
  
    router.push(
      {
        pathname: changePage,
        query: JSON.stringify(props),
      },
      `${pageName}`,
    )
    if (pageTitle) {
      this.pageTitle = pageTitle
    }
  }

  // MARK page back router
  PageBack = () => {
    router.back()
  }

  // MARK: header main title change
  private MainTitle = (changeTitleNumber: number) => {
    this.mainTitle = this.titles[changeTitleNumber]
  }
}

export default BaseStore
