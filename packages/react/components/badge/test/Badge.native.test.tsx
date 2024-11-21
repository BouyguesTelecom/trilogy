import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'

import Badge from '@/components/badge/Badge.native'
import Text from '@/components/text/Text.native'

jest.useFakeTimers()

describe('Badge component', () => {
  test('should contain toto as text', () => {
    render(
      <Badge>
        <Text>toto</Text>
      </Badge>,
    )
    expect(screen.getByText('toto')).toBeOnTheScreen()
  })

  test('should have a text content', () => {
    render(<Badge textContent={'TEXT'}>TEXTCONTENT</Badge>)
    expect(screen.getByText('TEXT')).toBeOnTheScreen()
  })

  test('should have a content', () => {
    render(<Badge content={'CONTENT'}>TEXT</Badge>)
    expect(screen.getByText('CONTENT')).toBeOnTheScreen()
  })

  test('should onClick attribut work', async () => {
    const onClick = jest.fn()
    const user = userEvent.setup()

    render(
      <Badge testId='badge' onClick={onClick}>
        DEFAULT
      </Badge>,
    )

    await user.press(screen.getByTestId('badge'))
    expect(onClick).toHaveBeenCalled()
  })
})
