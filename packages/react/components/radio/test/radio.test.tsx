import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Radio from '../Radio'

describe('Radio component', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<Radio label='Test radio' />)
    expect(getByLabelText('Test radio')).toBeInTheDocument()
  })

  it('handles disabled correctly', () => {
    const { getByLabelText } = render(<Radio label='Test radio' disabled />)
    const input = getByLabelText('Test radio')
    expect(input).toBeDisabled()
  })

  it('handles checked state correctly', () => {
    const { getByLabelText } = render(<Radio label='Test radio' checked />)
    const input = getByLabelText('Test radio')
    expect(input).toBeChecked()
  })

  it('should render label and input', () => {
    const { getByLabelText } = render(<Radio label='Option 1' />)
    expect(getByLabelText('Option 1')).toBeInTheDocument()
  })

  it('should not call onChange when input is clicked and disabled is true', () => {
    const handleChange = jest.fn()
    const { getByLabelText } = render(<Radio label='Option 1' onChange={handleChange} disabled={true} />)
    fireEvent.click(getByLabelText('Option 1'))
    expect(handleChange).toHaveBeenCalledTimes(0)
  })
})
