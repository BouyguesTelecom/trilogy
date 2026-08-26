import * as React from 'react'
import { render } from '@testing-library/react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from '@/components/accordion/index'

describe('Accordion', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Accordion testId={'accordion'}>
        <AccordionItem>
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )
    const accordion = getByTestId('accordion')
    expect(accordion).toBeInTheDocument()
  })
})
