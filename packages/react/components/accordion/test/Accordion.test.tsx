import AccordionExample from '@/components/accordion/examples'
import { render } from '@testing-library/react'
import React from 'react'

describe('Accordion', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<AccordionExample />)
    const accordion = getByTestId('accordion')
    expect(accordion).toBeInTheDocument()
  })
})
