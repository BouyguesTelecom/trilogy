import AccordionExample from '@/components/accordion/examples'
import { render } from '@testing-library/react-native'
import React from 'react'

describe('Accordion', () => {
  it('should render correctly', () => {
    render(<AccordionExample />)
  })
})
