import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Button from '../Button.native'

jest.useFakeTimers()

describe('Button component', () => {
  test('should be render', () => {
    render(<Button testId='button' />)
    expect(screen.getByTestId('button')).toBeOnTheScreen()
  })

  test('should contain toto as text', () => {
    render(<Button variant='PRIMARY'>toto</Button>)
    expect(screen.getByText('toto')).toBeOnTheScreen()
  })

  test('should be loading', () => {
    render(<Button loading={true}>LOADING</Button>)
    expect(screen.getByTestId('activity-indicator')).toBeOnTheScreen()
  })

  test('should be disabled', async () => {
    const onClick = jest.fn()
    render(
      <Button disabled onClick={onClick} testId='button'>
        DISABLED
      </Button>,
    )
    const user = userEvent.setup()
    await user.press(screen.getByTestId('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  test('should be not disabled', async () => {
    const onClick = jest.fn()
    render(
      <Button onClick={onClick} testId='button'>
        BUTTON
      </Button>,
    )
    const user = userEvent.setup()
    await user.press(screen.getByTestId('button'))
    expect(onClick).toHaveBeenCalled()
  })

  test('should have icon', async () => {
    render(<Button iconName='tri-alert'>BUTTON</Button>)
    expect(screen.getByTestId('button-icon')).toBeOnTheScreen()
  })
})
