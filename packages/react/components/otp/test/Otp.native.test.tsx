import { fireEvent, render, screen } from '@testing-library/react-native'
import * as React from 'react'
import Otp from '../Otp'

jest.useFakeTimers()

describe('Otp', () => {
  it('renders', () => {
    const onChange = jest.fn()
    const onCompleted = jest.fn()
    render(<Otp onChange={onChange} code='123456' onCompleted={onCompleted} label='label' />)
    Array.from({ length: 6 }).map((_, i) => {
      expect(screen.getByText(String(i + 1)))
    })

    const input = screen.getByTestId('input-id')
    expect(input.props.value).toEqual('123456')
    fireEvent.changeText(input, '123')

    Array.from({ length: 3 }).map((_, i) => {
      expect(screen.queryByText(String(i + 4))).toBeNull()
    })

    fireEvent.changeText(input, '123456')
    expect(onCompleted).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalled()
    expect(screen.getByText('label'))
  })

  it('disabled', () => {
    render(<Otp disabled code='123456' />)
    Array.from({ length: 6 }).map((_, i) => {
      expect(screen.getByText(String(i + 1)))
    })

    const input = screen.getByTestId('input-id')
    expect(input.props.value).toEqual('123456')
    fireEvent.changeText(input, '123')

    Array.from({ length: 3 }).map((_, i) => {
      expect(screen.getByText(String(i + 4)))
    })
  })
})
