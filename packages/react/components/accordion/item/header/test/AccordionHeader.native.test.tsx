import AccordionExample from '@/components/accordion/examples'
import { render, screen } from '@testing-library/react-native'
import React from 'react'

describe('Accordion Header', () => {
  it('should render correctly', () => {
    render(<AccordionExample />)
    expect(screen.getByText('Hello World 1')).toBeOnTheScreen()
  })
})
