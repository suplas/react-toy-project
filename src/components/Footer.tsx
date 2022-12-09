import { observer } from 'mobx-react'
import styled from 'styled-components'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Home, CalendarMonth, MoreHoriz, ChatBubble } from '@mui/icons-material'

const Footer = styled.div`
  position: fixed;
  z-index: 2000;
  width: 100%;
  background-color: #fff;
  padding: 10px 0;
  border-top: 1px solid #e2e2e2;
  bottom: 0;
`

const NavigationIcon = styled(BottomNavigationAction)`
    width: auto;
`

export default observer(() => {
  return (
    <Footer>
      <BottomNavigation
        value={1}
        //   onChange={(event, newValue) => {
        //     setValue(newValue)
        //   }}
      >
        <NavigationIcon icon={<Home />} />
        <NavigationIcon icon={<CalendarMonth />} />
        <NavigationIcon icon={<ChatBubble />} />
        <NavigationIcon icon={<MoreHoriz />} />
      </BottomNavigation>
    </Footer>
  )
})
