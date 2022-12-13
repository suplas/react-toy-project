import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import './App.css'

describe('should App rendering', () => {
  it('loads and displays header', () => {
    render(<App />)
  })
})
