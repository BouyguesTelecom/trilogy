import AccordionExample from '@/components/accordion/examples'
import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

jest.useFakeTimers()

describe('Accordion Header', () => {
  it('should render correctly', () => {
    render(<AccordionExample />)
    expect(screen.getByText('Hello World 1')).toBeOnTheScreen()
  })

  test('should be disabled', async () => {
    const onClick = jest.fn()
    render(<AccordionExample onClick={onClick} />)
    const user = userEvent.setup()
    await user.press(screen.getByText('Hello World 3'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
