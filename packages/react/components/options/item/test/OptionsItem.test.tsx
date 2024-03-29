import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import OptionsItem from '../OptionsItem'

describe('OptionsItem', () => {
  it('renders a label with a given text', () => {
    const { getByLabelText } = render(<OptionsItem label='Test Label' value={'Opton 1'} />)
    expect(getByLabelText('Test Label')).toBeInTheDocument()
  })

  it('calls onChange and onClick when clicked', () => {
    const onChange = jest.fn()
    const onClick = jest.fn()
    const { getByLabelText } = render(
      <OptionsItem label='Test Label ' value={'Opton 1'} onChange={onChange} onClick={onClick} />,
    )
    const input = getByLabelText('Test Label') as HTMLInputElement
    fireEvent.click(input)
    expect(onChange).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalled()
  })

  it('does not call onChange or onClick when clicked and disabled is true', () => {
    const onChange = jest.fn()
    const onClick = jest.fn()
    const { getByLabelText } = render(
      <OptionsItem label='Test Label' value={'Opton 1'} disabled onChange={onChange} onClick={onClick} />,
    )
    const input = getByLabelText('Test Label') as HTMLInputElement
    fireEvent.click(input)
    expect(onChange).not.toHaveBeenCalled()
    expect(onClick).not.toHaveBeenCalled()
  })

  it('updates checked state when clicked and readonly is false', () => {
    const { getByLabelText } = render(<OptionsItem label='Test Label' value={'Opton 1'} />)
    const input = getByLabelText('Test Label') as HTMLInputElement
    fireEvent.click(input)
    expect(input.checked).toBe(true)
  })
})
