import * as React from 'react'
import { render } from '@testing-library/react'
import Otp from '../Otp'

describe('Otp', () => {
  const defaultProps = {
    code: '',
    length: 6,
    disabled: false,
    error: false,
    onCompleted: jest.fn(),
    onChange: jest.fn(),
    onFocus: jest.fn(),
  }

  it('renders without error', () => {
    const { container } = render(<Otp {...defaultProps} data-testid={'otp-input'} />)
    expect(container).toMatchSnapshot()
  })
})
