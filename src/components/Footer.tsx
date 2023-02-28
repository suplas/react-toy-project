import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Home, CalendarMonth, MoreHoriz, ChatBubble } from '@mui/icons-material'
import BaseStore from '../stores/BaseStore'

const Footer = styled.div`
  z-index: 2000;
  width: 100%;
  max-width: 1200px;
  position: fixed;
  bottom: 0;
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
    const { selectNavigationNumber, SetNavigationChange } = store!.base
    return (
      <Footer>
        <Navigation
          value={selectNavigationNumber}
          onChange={(event, newValue) => {
            SetNavigationChange(newValue)
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
