import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Accordion, AccordionItem, AccordionBody, AccordionHeader } from '../../index'

describe('AccordionItem', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem id={'accordion-item'} active={false}>
          <AccordionHeader testId={'content'}>Accordion Header</AccordionHeader>
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
        <AccordionItem id={'accordion'} active={true}>
          <AccordionHeader testId={'header'}>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordionItem = getByTestId('accordion')
    expect(accordionItem.querySelector('input[type=checkbox]')).toBeChecked()

    const header = getByTestId('header')
    fireEvent.click(header)

    expect(header).toBeVisible()
    fireEvent.click(accordionItem)
  })

  test('should be disabled', () => {
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem id={'accordion'} disabled>
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordionItem = getByTestId('accordion')
    expect(accordionItem).toHaveClass('is-disabled')

    fireEvent.click(accordionItem)
    expect(accordionItem.querySelector('input[type=checkbox]')).toBeFalsy()
  })

  test('should execute onOpen function', () => {
    let isOpen = false
    const { getByTestId } = render(
      <Accordion>
        <AccordionItem active={false} id={'accordion'} onOpen={() => (isOpen = true)}>
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
        <AccordionItem active={true} id={'accordion'} onClose={() => (isOpen = false)}>
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
        <AccordionItem active={false} id={'accordion'}>
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
        <AccordionItem active={true} id={'accordion'}>
          <AccordionHeader>Accordion Header</AccordionHeader>
          <AccordionBody> content </AccordionBody>
        </AccordionItem>
      </Accordion>,
    )

    const accordionItem = getByTestId('accordion')
    expect(accordionItem.getAttribute('data-collapsed')).toBe('0')
  })
})
