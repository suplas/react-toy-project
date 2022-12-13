import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Home, CalendarMonth, MoreHoriz, ChatBubble } from '@mui/icons-material'
import BaseStore from '../app/stores/BaseStore'

const Footer = styled.div`
  z-index: 2000;
  width: auto;
  background-color: #fff;
  border-top: 1px solid #e2e2e2;
  position: relative;
`

const Navigation = styled(BottomNavigation)`
  width: auto;
`

const NavigationIcon = styled(BottomNavigationAction)`
  width: auto;
`

type BaseProps = {
  store?: StoreType
}

type StoreType = {
  base: BaseStore
}

export default inject('store')(
  observer(({ store }: BaseProps) => {
    const { selectNavigationNumber, SetSelectNavigationNumber } = store!.base
    return (
      <Footer>
        <Navigation
          value={selectNavigationNumber}
          onChange={(event, newValue) => {
            SetSelectNavigationNumber(newValue)
          }}
        >
          <NavigationIcon icon={<Home />} />
          <NavigationIcon icon={<CalendarMonth />} />
          <NavigationIcon icon={<ChatBubble />} />
          <NavigationIcon icon={<MoreHoriz />} />
        </Navigation>
      </Footer>
    )
  }),
)
