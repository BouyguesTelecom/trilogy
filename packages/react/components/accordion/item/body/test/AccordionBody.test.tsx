import { AccordionExample } from '@/components/accordion'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Accordion component', () => {
  test('should contain lorem text', () => {
    render(<AccordionExample />)
    expect(screen.getByText('Lorem ipsum dolor sit amet lorem')).toBeInTheDocument()
  })
})
