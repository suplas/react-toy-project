import { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'
import CalendarService from '../services/CalendarService'
import CalendarViewModel from '../viewModels/CalendarViewModel'
import Header from '../components/Header'
import CalendarMain from '../components/Calendar/CalendarMain'
import CalendarContent from '../components/Calendar/Contents/CalendarContent'
import Footer from '../components/Footer'

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

const Home: NextPage = () => {
  const viewModel = new CalendarViewModel(CalendarService.instance)
  return (
    <Wrap elevation={24}>
      <Header />
      <Container>
        <CalendarMain viewModel={viewModel} />
        <CalendarContent viewModel={viewModel} />
      </Container>
      <Footer />
    </Wrap>
  )
}

export default Home
