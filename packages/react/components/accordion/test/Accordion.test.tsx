import { render } from '@testing-library/react'
import React from 'react'

import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from '@/components/accordion'

describe('Accordion', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Accordion testId={'accordions'}>
        <AccordionItem>
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )
    const accordion = getByTestId('accordions')
    expect(accordion).toBeInTheDocument()
  })
})
