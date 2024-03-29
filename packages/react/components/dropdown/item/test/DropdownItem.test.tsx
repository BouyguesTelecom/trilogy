import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DropdownItem from '../DropdownItem'

describe('DropdownItem', () => {
  it('renders the label', () => {
    const { getByLabelText } = render(<DropdownItem label='Item 1' />)
    expect(getByLabelText('Item 1')).toBeInTheDocument()
  })

  it('can be checked and unchecked', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(<DropdownItem label='Item 1' onChange={onChange} />)

    const checkbox = getByLabelText('Item 1') as HTMLInputElement
    expect(checkbox.checked).toBe(false)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith({
      itemId: expect.any(String),
      itemValue: '',
      itemChecked: true,
      itemLabel: 'Item 1',
    })

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(false)
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith({
      itemId: expect.any(String),
      itemValue: '',
      itemChecked: false,
      itemLabel: 'Item 1',
    })
  })

  it('does not respond to click events if disabled', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(<DropdownItem label='Item 1' disabled onChange={onChange} />)

    const checkbox = getByLabelText('Item 1') as HTMLInputElement
    expect(checkbox.checked).toBe(false)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(false)
    expect(onChange).not.toHaveBeenCalled()
  })
})
