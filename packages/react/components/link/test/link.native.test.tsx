import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Link from '../Link.native'

jest.useFakeTimers()

describe('Link component', () => {
  test('renders children', async () => {
    render(<Link href='https://example.com'>Example</Link>)
    expect(screen.getByText('Example')).toBeOnTheScreen()
  })

  test('to be clickable', async () => {
    const onClick = jest.fn()

    render(
      <Link onClick={onClick} href='https://example.com'>
        Example
      </Link>,
    )
    expect(screen.getByText('Example')).toBeOnTheScreen()
    const user = userEvent.setup()
    await user.press(screen.getByText('Example'))
    expect(onClick).toHaveBeenCalled()
  })

  test('have icon', async () => {
    render(
      <Link href='https://example.com' {...{ testID: 'icon' }} iconName='tri-alert'>
        Example
      </Link>,
    )
    expect(screen.getByTestId('icon')).toBeOnTheScreen()
  })
})
