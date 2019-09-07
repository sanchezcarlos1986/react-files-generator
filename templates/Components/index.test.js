import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import COMPONENT_NAME from './COMPONENT_NAME.js'

// Unmount everything from the dom after each test
afterEach(cleanup)

describe('<COMPONENT_NAME />', () => {
  test('renders COMPONENT_NAME', () => {
    // Renders component
    const { getByTestId } = render(<COMPONENT_NAME />)
    const component = getByTestId('COMPONENT_NAME')
  
    // Asserts
    expect(component).toBeInTheDocument()
  })
})