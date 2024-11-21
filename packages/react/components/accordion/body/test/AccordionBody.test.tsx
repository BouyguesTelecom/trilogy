import React from 'react'

import { AccordionBody } from '@/components/accordion'
import { render, screen } from '@testing-library/react'

describe('Accordion component', () => {
  test('should contain toto as text', () => {
    render(<AccordionBody>toto</AccordionBody>)

    expect(screen.getByText('toto')).toBeInTheDocument()
  })
})
