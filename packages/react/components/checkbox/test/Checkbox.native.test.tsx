import { render, screen, userEvent } from '@testing-library/react-native'
import * as React from 'react'
import Checkbox from '../Checkbox.native'

jest.useFakeTimers()

describe('Checkbox component', () => {
  it('renders label correctly', () => {
    render(<Checkbox testId={'test'} />)
    expect(screen.getByTestId('test')).toBeOnTheScreen()
  })

  it('should be horizontalTile', () => {
    render(<Checkbox horizontalTile testId={'test'} />)
    expect(screen.getByTestId('test')).toBeOnTheScreen()
  })

  it('should be tile', () => {
    render(<Checkbox tile testId={'test'} />)
    expect(screen.getByTestId('test')).toBeOnTheScreen()
  })

  it('should call onClick when clicked', async () => {
    const onClick = jest.fn()
    render(<Checkbox onClick={onClick} testId={'test'} />)
    const user = userEvent.setup()
    await user.press(screen.getByTestId('test'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should call onClick when clicked tile', async () => {
    const onClick = jest.fn()
    render(<Checkbox onClick={onClick} tile testId={'test'} />)
    const user = userEvent.setup()
    await user.press(screen.getByTestId('test'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should call onClick when clicked horizontalTile', async () => {
    const onClick = jest.fn()
    render(<Checkbox onClick={onClick} horizontalTile testId={'test'} />)
    const user = userEvent.setup()
    await user.press(screen.getByTestId('test'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should have description and label tile', () => {
    render(<Checkbox tile description='toto' label='label' />)
    expect(screen.getByText('toto')).toBeOnTheScreen()
    expect(screen.getByText('label')).toBeOnTheScreen()
  })

  it('should have description and label horizontalTile', () => {
    render(<Checkbox horizontalTile description='toto' label='label' />)
    expect(screen.getByText('toto')).toBeOnTheScreen()
    expect(screen.getByText('label')).toBeOnTheScreen()
  })
})
