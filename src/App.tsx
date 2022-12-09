import './App.css'
import CalendarService from './app/services/CalendarService'
import CalendarMain from './components/Calendar/CalendarMain'
import CalendarViewModel from './app/viewModels/CalendarViewModel'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: #fafbfc;
  overflow: hidden;
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 10px 0;
`

function App() {
  let viewModel = new CalendarViewModel(CalendarService.instance)

  return (
    <Wrap>
      <Header />
      <Container>
        <CalendarMain viewModel={viewModel} />
      </Container>
      <Footer/>
    </Wrap>
  )
}

export default App
