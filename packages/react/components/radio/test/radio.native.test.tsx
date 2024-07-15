import { render, screen, userEvent } from '@testing-library/react-native'
import React from 'react'
import Radio from '../Radio.native'

jest.useFakeTimers()

describe('Radio', () => {
  it('renders correctly', () => {
    render(<Radio label='Test radio' />)
    expect(screen.getByText('Test radio')).toBeOnTheScreen()
  })


  it('handles onChange correctly', async () => {
    const onChange = jest.fn()
    render(<Radio label='Test radio' onChange={onChange} />)
    const user = userEvent.setup()
    await user.press(screen.getByText('Test radio'))
    expect(onChange).toHaveBeenCalled()
  })

  it('handles disabled correctly', async () => {
    const onChange = jest.fn()
    render(<Radio label='Test radio' disabled onChange={onChange} />)
    const user = userEvent.setup()
    await user.press(screen.getByText('Test radio'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('renders correctly horizontalTile', () => {
    render(<Radio id='horizontalTile' horizontalTile />)
    expect(screen.getByTestId('horizontalTile')).toBeOnTheScreen()
  })

  it('handles onChange horizontalTile', async () => {
    const onChange = jest.fn()
    render(<Radio label='Test radio' onChange={onChange} horizontalTile />)
    const user = userEvent.setup()
    await user.press(screen.getByText('Test radio'))
    expect(onChange).toHaveBeenCalled()
  })

  it('handles disabled correctly horizontalTile', async () => {
    const onChange = jest.fn()
    render(<Radio label='Test radio' disabled onChange={onChange} horizontalTile />)
    const user = userEvent.setup()
    await user.press(screen.getByText('Test radio'))
    expect(onChange).not.toHaveBeenCalled()
  })

    it('renders correctly tile', () => {
    render(<Radio id='tile' tile />)
    expect(screen.getByTestId('tile')).toBeOnTheScreen()
  })

  it('handles onChange tile', async () => {
    const onChange = jest.fn()
    render(<Radio label='Test radio' onChange={onChange} tile />)
    const user = userEvent.setup()
    await user.press(screen.getByText('Test radio'))
    expect(onChange).toHaveBeenCalled()
  })

  it('handles disabled correctly tile', async () => {
    const onChange = jest.fn()
    render(<Radio label='Test radio' disabled onChange={onChange} tile />)
    const user = userEvent.setup()
    await user.press(screen.getByText('Test radio'))
    expect(onChange).not.toHaveBeenCalled()
  })


})
