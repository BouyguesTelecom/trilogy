// Dependencies
import React from 'react'

// Testing methods
import { render, screen } from '@testing-library/react'
import AccordionBody from '../../body/AccordionBody'

// Component to test

describe('Accordion component', () => {
  test('should contain toto as text', () => {
    render(<AccordionBody>toto</AccordionBody>)

    expect(screen.getByText('toto')).toBeInTheDocument()
  })
})
