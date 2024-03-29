import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Otp from '../Otp'

describe('Otp', () => {
  const defaultProps = {
    code: '',
    codeSize: 6,
    disabled: false,
    error: false,
    activated: false,
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
})
