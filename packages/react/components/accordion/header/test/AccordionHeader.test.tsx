import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from '@/components/accordion'

describe('AccordionItem', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem id={'accordion'} active={false}>
          <AccordionHeader testId={'header'}>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )
    const accordionHeader = getByTestId('header')
    expect(accordionHeader).toBeInTheDocument()
    expect(accordionHeader).toHaveClass('accordion-header')
  })

  test('should not expand on accordion disabled when clicked', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem id={'accordion'} disabled={true}>
          <AccordionHeader testId={'header'}>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordionItemDisabled = getByTestId('accordion')

    const header = getByTestId('header')
    fireEvent.click(header)
    expect(accordionItemDisabled.querySelector('input[type=checkbox]')).toBeFalsy()
    fireEvent.click(accordionItemDisabled)
  })

  test('should have toggle', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem active={true}>
          <AccordionHeader testId={'accordion'}>Accordion Header</AccordionHeader>
          <AccordionBody>content</AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordion = getByTestId('accordion')
    expect(accordion).toHaveTextContent('Accordion Header')
  })
})
