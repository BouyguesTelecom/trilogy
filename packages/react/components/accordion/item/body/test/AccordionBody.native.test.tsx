import AccordionExample from '@/components/accordion/examples'
import { render, screen } from '@testing-library/react-native'
import React from 'react'

describe('Accordion', () => {
  it('should render correctly', () => {
    render(<AccordionExample />)
    expect(screen.getByText('Lorem ipsum dolor sit amet lorem')).toBeOnTheScreen()
  })
})
