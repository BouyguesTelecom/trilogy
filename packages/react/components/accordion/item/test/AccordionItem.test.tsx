import AccordionExample from '@/components/accordion/examples'
import { render } from '@testing-library/react'
import * as React from 'react'

describe('AccordionItem', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<AccordionExample />)
    const accordionItem = getByTestId('accordion-item')
    expect(accordionItem).toBeInTheDocument()
  })
})
