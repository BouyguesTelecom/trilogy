import * as React from 'react'
import { render } from '@testing-library/react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from '../../index'

describe('AccordionItem', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem data-testid={'accordion-item'} open={false}>
          <AccordionHeader data-testid={'content'}>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )
    const accordionItem = getByTestId('accordion-item')
    expect(accordionItem).toBeInTheDocument()
  })
})
