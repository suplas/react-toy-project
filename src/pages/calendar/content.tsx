import { NextPage } from 'next'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import CalendarViewModel from '../../viewModels/CalendarViewModel'
import CalendarService from '../../services/CalendarService'
import { SubHeader } from '../../components/Header'
import Footer from '../../components/Footer'

const Wrap = styled(Paper)`
  overflow: hidden;
  width: auto;
  height: 100vh;
  display: block;
  flex-direction: column;
`

const Container = styled.div`
  display: block;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-top: 10px;
  flex-wrap: wrap;
`

const Calendar: NextPage = () => {
  let viewModel = new CalendarViewModel(CalendarService.instance)
  return (
    <Wrap>
      <Container>
        <SubHeader />
        <Footer />
      </Container>
    </Wrap>
  )
}

export default Calendar
