import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import { Text } from '@/components/text'
import { View } from '@/components/view'

jest.useFakeTimers()

describe('View', () => {
  it('renders without child ', () => {
    render(<View id='view' />)
    expect(screen.getByTestId('view')).toBeOnTheScreen()
  })

  it('renders correctly with child ', () => {
    render(
      <View id='view'>
        <Text>Text</Text>
      </View>,
    )
    expect(screen.getByTestId('view')).toBeOnTheScreen()
    expect(screen.getByText('Text')).toBeOnTheScreen()
  })

  it('should be clickable ', async () => {
    const onClick = jest.fn()
    render(
      <View id='view' onClick={onClick}>
        <Text>Text</Text>
      </View>,
    )
    const user = userEvent.setup()
    await user.press(screen.getByText('Text'))
    expect(onClick).toHaveBeenCalled()
    expect(screen.getByTestId('view')).toBeOnTheScreen()
    expect(screen.getByText('Text')).toBeOnTheScreen()
  })
})
