import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from '../../index'

describe('AccordionItem', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem data-testid={'accordion-item'} active={false}>
          <AccordionHeader data-testid={'content'}>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )
    const accordionItem = getByTestId('accordion-item')
    expect(accordionItem).toBeInTheDocument()
    expect(accordionItem).toHaveClass('accordion')
  })

  test('should expand and collapse accordion item when clicked', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem data-testid={'accordion'} active={true}>
          <AccordionHeader data-testid={'header'}>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordionItem = getByTestId('accordion')

    const header = getByTestId('header')
    fireEvent.click(header)

    expect(header).toBeVisible()
    fireEvent.click(accordionItem)
  })

  test('should be disabled', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem data-testid={'accordion'} disabled>
          <AccordionHeader data-testid={'accordionHeader'}>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordionItem = getByTestId('accordion')
    fireEvent.click(accordionItem)
    expect(accordionItem.querySelector('input[type=checkbox]')).toBeFalsy()
  })

  test('should execute onOpen function', () => {
    let isOpen = false
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem active={false} data-testid={'accordion'} onOpen={() => (isOpen = true)}>
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordionItem = getByTestId('accordion')
    fireEvent.click(accordionItem)
    expect(isOpen).toBe(true)
  })

  test('should execute onClose function', () => {
    let isOpen = true
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem active={true} data-testid={'accordion'} onClose={() => (isOpen = false)}>
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordionItem = getByTestId('accordion')
    fireEvent.click(accordionItem)
    expect(isOpen).toBe(false)
  })

  test('should have data-collapsed 1', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem active={false} data-testid={'accordion'}>
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordionItem = getByTestId('accordion')
    expect(accordionItem.getAttribute('data-collapsed')).toBe('1')
  })

  test('should have data-collapsed 0', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem active={true} data-testid={'accordion'}>
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordionItem = getByTestId('accordion')
    expect(accordionItem.getAttribute('data-collapsed')).toBe('0')
  })
})
