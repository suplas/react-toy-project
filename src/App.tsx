import './App.css'
import CalendarService from './app/services/CalendarService'
import CalendarMain from './components/Calendar/CalendarMain'
import CalendarViewModel from './app/viewModels/CalendarViewModel'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'

const Wrap = styled(Paper)`
  overflow: hidden;
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
`

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: auto;
  padding-top: 10px;
  margin-bottom: auto;

`

function App() {
  let viewModel = new CalendarViewModel(CalendarService.instance)

  return (
    <>
      <Wrap elevation={24}>
        <Header />
        <Container>
          <CalendarMain viewModel={viewModel} />
        </Container>
        <Footer />
      </Wrap>
    </>
  )
}

export default App
