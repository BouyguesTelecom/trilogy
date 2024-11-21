import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import Switch from '@/components/switch/Switch'

describe('Switch', () => {
  it('renders the label text', () => {
    const labelText = 'My Switch'
    const { getByText } = render(<Switch label={labelText} />)
    expect(getByText(labelText)).toBeInTheDocument()
  })

  it('calls onChange function when clicked', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(<Switch label='My Switch' onChange={onChange} />)
    const checkbox = getByLabelText('My Switch')
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
