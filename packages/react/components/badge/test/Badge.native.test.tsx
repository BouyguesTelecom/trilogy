import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Text from '../../text/Text.native'
import Badge from '../Badge.native'

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

    render(<Badge testId="badge" onClick={onClick}>DEFAULT</Badge>)

    await user.press(screen.getByTestId('badge'))
    expect(onClick).toHaveBeenCalled()
  })
})
