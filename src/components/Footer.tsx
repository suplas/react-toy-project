import { observer } from 'mobx-react'
import styled from 'styled-components'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Home, CalendarMonth, MoreHoriz, ChatBubble } from '@mui/icons-material'

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

export default observer(() => {
  return (
    <Footer>
      <Navigation
        value={1}
        //   onChange={(event, newValue) => {
        //     setValue(newValue)
        //   }}
      >
        <NavigationIcon icon={<Home />} />
        <NavigationIcon icon={<CalendarMonth />} />
        <NavigationIcon icon={<ChatBubble />} />
        <NavigationIcon icon={<MoreHoriz />} />
      </Navigation>
    </Footer>
  )
})
