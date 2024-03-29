import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Select from '../Select'
import SelectOption from '../option'
import { IconName } from '../../icon'

describe('SELECT NATIVE WEB', () => {
  const props = {
    name: 'Option',
    label: 'Label',
    id: 'id',
    native: true,
    testId: 'testId',
    onFocus: jest.fn(),
    onBlur: jest.fn(),
  }

  it('should be native-old select', () => {
    const p = { ...props, selected: 'opt_2' }
    const { getByTestId } = render(
      <Select {...p}>
        {[...Array(5)].map((item, i) => {
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
    expect(select).toHaveValue('opt_2')
    expect(select).toBeInTheDocument()
    expect(select.nextElementSibling).toHaveTextContent('Label')
  })

  it('should change value', () => {
    const { getByTestId } = render(
      <Select {...props}>
        {[...Array(5)].map((item, i) => {
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
      <Select {...props}>
        {[...Array(5)].map((item, i) => {
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
      <Select {...p}>
        {[...Array(5)].map((item, i) => {
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
      <Select {...p}>
        {[...Array(5)].map((item, i) => {
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
    expect(select.parentElement?.firstChild?.firstChild).toHaveClass('tri-advisor')
  })
})

describe('SELECT  WEB', () => {
  const props = {
    name: 'Option',
    label: 'Label',
    id: 'id',
    native: true,
    testId: 'testId',
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    iconName: 'tri-advisor' as IconName,
  }

  it('should be select', () => {
    const p = { ...props, selected: 'opt_2', native: false }
    const { getByTestId } = render(
      <Select {...p}>
        {[...Array(5)].map((item, i) => {
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
    expect(select).toHaveAttribute('data-select-name', 'Option')
    expect(select).toBeInTheDocument()
    expect(select.firstChild?.firstChild).toHaveClass('tri-advisor')
    expect(select.firstElementChild?.nextElementSibling).toHaveTextContent('Label')
    expect(select.firstElementChild?.nextElementSibling?.nextElementSibling).toHaveTextContent('option 2')
  })

  it('should be close and open', () => {
    const p = { ...props, selected: 'opt_2', native: false }
    const { getByTestId } = render(
      <Select {...p}>
        {[...Array(5)].map((item, i) => {
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
    expect(select.nextElementSibling).toHaveAttribute('data-is-open-options', 'false')
    expect(select.nextElementSibling).toHaveAttribute('aria-expanded', 'false')
    expect(select.nextElementSibling).toHaveAttribute('aria-hidden', 'true')
    fireEvent.click(select)
    expect(select.nextElementSibling).toHaveAttribute('data-is-open-options', 'true')
    expect(select.nextElementSibling).toHaveAttribute('aria-expanded', 'true')
    expect(select.nextElementSibling).toHaveAttribute('aria-hidden', 'false')
  })

  it('should be disabled', () => {
    const p = { ...props, disabled: true, native: false }
    const { getByTestId } = render(
      <Select {...p}>
        {[...Array(5)].map((item, i) => {
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
    expect(select).toHaveAttribute('aria-disabled', 'true')
  })
})
