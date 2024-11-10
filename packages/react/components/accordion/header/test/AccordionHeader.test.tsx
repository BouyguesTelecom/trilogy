import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from '../../index'

describe('AccordionItem', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem data-testid={'accordion'} active={false}>
          <AccordionHeader data-testid={'header'}>Accordion Header</AccordionHeader>
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
        <AccordionItem data-testid={'accordion'} disabled={true}>
          <AccordionHeader data-testid={'header'}>Accordion Header</AccordionHeader>
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
          <AccordionHeader data-testid={'accordion'}>Accordion Header</AccordionHeader>
          <AccordionBody>content</AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordion = getByTestId('accordion')
    expect(accordion).toHaveTextContent('Accordion Header')
  })
})
