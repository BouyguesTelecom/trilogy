import React from 'react'
import { render } from '@testing-library/react'
import { Accordion, AccordionItem, AccordionBody, AccordionHeader } from '../index'

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
