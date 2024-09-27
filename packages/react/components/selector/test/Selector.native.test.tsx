import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Selector from '../Selector'
import SelectorItem from '../item'

jest.useFakeTimers()

describe('Selector component', () => {
  const options = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
  ]

  it('renders options correctly', () => {
    render(
      <Selector>
        {options.map((opt) => (
          <SelectorItem key={opt.value}>{opt.label}</SelectorItem>
        ))}
      </Selector>,
    )
    options.forEach((opt) => {
      expect(screen.getByText(opt.label)).toBeOnTheScreen()
    })
  })

  it('handles clicks correctly', () => {
    const handleClick = jest.fn()
    render(
      <Selector>
        {options.map((opt) => (
          <SelectorItem key={opt.value} onClick={handleClick}>
            {opt.label}
          </SelectorItem>
        ))}
      </Selector>,
    )

    options.forEach(async (opt) => {
      expect(screen.getByText(opt.label)).toBeOnTheScreen()
      const user = userEvent.setup()
      await user.press(screen.getByText(opt.label))
      expect(handleClick).toHaveBeenCalled()
    })
  })
})
