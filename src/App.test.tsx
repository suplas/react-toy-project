import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import './App.css'
import styled from 'styled-components'
import CalendarService from './app/services/CalendarService'
import CalendarMain from './components/Calendar/CalendarMain'
import CalendarViewModel from './app/viewModels/CalendarViewModel'


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe('should App rendering', () => {
  it('loads and displays header', () => {
    render(<App />);

    
  })

})



