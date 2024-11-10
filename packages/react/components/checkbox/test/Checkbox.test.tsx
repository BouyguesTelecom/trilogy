import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Checkbox from '../Checkbox'

describe('Checkbox component', () => {
  const defaultProps = {
    label: 'Test checkbox',
    id: 'test-checkbox',
    name: 'test-checkbox',
  }

  it('renders label correctly', () => {
    const { getByLabelText } = render(<Checkbox {...defaultProps} />)
    expect(getByLabelText(defaultProps.label)).toBeInTheDocument()
  })

  it('toggles the checked state correctly when clicked', () => {
    const { getByLabelText } = render(<Checkbox {...defaultProps} />)
    const checkbox = getByLabelText(defaultProps.label)

    // Click on checkbox to toggle checked state
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })
})
