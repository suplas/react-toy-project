import React from 'react'
import './App.css'
import CalendarService from './app/services/CalendarService'
import CalendarMain from './components/Calendar/CalendarMain'
import CalendarViewModel from './app/viewModels/CalendarViewModel'
import styled from 'styled-components'

const Wrap = styled.div`
  background-color: #fafbfc;
  overflow: hidden;
`

const Header = styled.div`
  position: relative;
  background-color: #fff;
  z-index: 2000;
`

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-item: center;
  //padding: 20px 30px;
  margin: 0 auto;
`

const Footer = styled.div`
  background-color: #fff;
  border-top: 1px solid #e4e8eb;
`

function App() {
  let viewModel = new CalendarViewModel(CalendarService.instance)

  return (
    <Wrap>
      <Header>
        <p>Header</p>
      </Header>
      <Container>
        <CalendarMain />
      </Container>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Wrap>
  )
}

export default App
