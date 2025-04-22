import { fireEvent, render } from '@testing-library/react'
import { IconName } from '@trilogy-ds/assets'
import * as React from 'react'
import Select from '../Select'
import SelectOption from '../option'

describe('SELECT NATIVE WEB', () => {
  const props = {
    name: 'Option',
    label: 'Label',
    id: 'id',
    native: true,
    onFocus: jest.fn(),
    onBlur: jest.fn(),
  }

  it('should be native-old select', () => {
    const p = { ...props, selected: 'opt_2' }
    const { getByTestId } = render(
      <Select {...p} data-testid={'testId'}>
        {[...Array(5)].map((_, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption key={i} id={value} value={value} label={`opt_${i}`}>
              {`option ${i}`}
            </SelectOption>
          )
        })}
      </Select>,
    )
    const select = getByTestId('testId')
    expect(select).toHaveAttribute('role', 'listbox')
    expect(select).toHaveAttribute('name', 'Option')
    expect(select).toHaveAttribute('id', 'id')
    expect(select).toBeInTheDocument()
    const value = (document.getElementById('id') as HTMLSelectElement).value
    expect(value).toBe('opt_2')
  })

  it('should change value', () => {
    const { getByTestId } = render(
      <Select {...props} data-testid={'testId'}>
        {[...Array(5)].map((_, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption key={i} id={value} value={value} label={`opt_${i}`}>
              {`option ${i}`}
            </SelectOption>
          )
        })}
      </Select>,
    )
    const select = getByTestId('testId')
    fireEvent.change(select, { target: { value: 'opt_3' } })
    expect(select).toHaveValue('opt_3')
    fireEvent.change(select, { target: { value: 'opt_2' } })
    expect(select).toHaveValue('opt_2')
  })

  it('should call focus and blur event', () => {
    const { getByTestId } = render(
      <Select {...props} data-testid={'testId'}>
        {[...Array(5)].map((_, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption key={i} id={value} value={value} label={`opt_${i}`}>
              {`option ${i}`}
            </SelectOption>
          )
        })}
      </Select>,
    )
    const select = getByTestId('testId')
    fireEvent.focus(select)
    expect(props.onFocus).toHaveBeenCalled()
    fireEvent.blur(select)
    expect(props.onBlur).toHaveBeenCalled()
  })

  it('should be disabled', () => {
    const p = { ...props, disabled: true }
    const { getByTestId } = render(
      <Select {...p} data-testid={'testId'}>
        {[...Array(5)].map((_, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption key={i} id={value} value={value} label={`opt_${i}`}>
              {`option ${i}`}
            </SelectOption>
          )
        })}
      </Select>,
    )
    const select = getByTestId('testId')
    expect(select).toHaveAttribute('disabled')
  })

  it('should have icon', () => {
    const p = { ...props, iconName: 'tri-advisor' as IconName }
    const { getByTestId } = render(
      <Select {...p} data-testid={'testId'}>
        {[...Array(5)].map((_, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption key={i} id={value} value={value} label={`opt_${i}`}>
              {`option ${i}`}
            </SelectOption>
          )
        })}
      </Select>,
    )
    const select = getByTestId('testId')
    expect(select.parentElement?.firstChild?.nextSibling?.firstChild).toHaveClass('tri-advisor')
  })
})
