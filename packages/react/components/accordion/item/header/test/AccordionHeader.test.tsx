import { AccordionExample } from '@/components/accordion'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'

describe('AccordionItem', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<AccordionExample />)
    const accordionHeader = getByTestId('header')
    expect(accordionHeader).toBeInTheDocument()
    expect(accordionHeader).toHaveClass('accordion-header')
    expect(accordionHeader).toHaveTextContent('Hello World 2')
  })

  test('should not expand on accordion disabled when clicked', () => {
    const { getByTestId } = render(<AccordionExample />)
    const accordionItemDisabled = getByTestId('accordion')
    const header = getByTestId('header')
    fireEvent.click(header)
    expect(accordionItemDisabled.querySelector('input[type=checkbox]')).toBeFalsy()
    fireEvent.click(accordionItemDisabled)
  })
})
