import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Otp from '@/components/otp/Otp'

describe('Otp', () => {
  const defaultProps = {
    code: '',
    codeSize: 6,
    disabled: false,
    error: false,
    onCompleted: jest.fn(),
    onChange: jest.fn(),
    onFocus: jest.fn(),
    autoFocus: true,
  }

  it('renders without error', () => {
    const { container } = render(<Otp {...defaultProps} />)
    expect(container).toMatchSnapshot()
  })

  it('calls onFocus when the component is focused', () => {
    const { getByTestId } = render(<Otp {...defaultProps} />)
    const container = getByTestId('otp-input')
    fireEvent.click(container)
    expect(defaultProps.onFocus).toHaveBeenCalledWith(true)
  })

  it('calls onChange when a num key is pressed', () => {
    const { getByTestId } = render(<Otp {...defaultProps} />)
    const container = getByTestId('otp-input')
    fireEvent.input(container.children[0], { target: { value: '1' } })
    expect(defaultProps.onChange).toHaveBeenCalledWith('1_____')
  })

  it('calls onChange when value is pasted (value.length > 1)', () => {
    const { getByTestId } = render(<Otp {...defaultProps} />)
    const input = getByTestId('otp-input')
    fireEvent.paste(input, {
      clipboardData: { getData: () => '1234' },
    })
    fireEvent.input(input.children[0], { target: { value: '1234' } })
    expect(defaultProps.onChange).toHaveBeenCalledWith('1234__')
  })

  it("calls onCompleted with '123456' when value 123456 is pasted", () => {
    const { getByTestId } = render(<Otp {...defaultProps} />)
    const input = getByTestId('otp-input')
    fireEvent.input(input.children[0], { target: { value: '123456' } })
    expect(defaultProps.onCompleted).toHaveBeenCalledWith('123456')
  })
})
