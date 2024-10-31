import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'
import Select from '../../Select'
import SelectOption from '../SelectOption'

describe('SELECT OPTION WEB', () => {
  const props = {
    name: 'Option',
    label: 'Label',
    id: 'id',
    testId: 'testId',
    selected: 'opt_2',
  }

  it('should be selected', () => {
    const { getByTestId } = render(
      <Select {...props}>
        {[...Array(5)].map((item, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption key={i} id={value} value={value} label={value} testId={value}>
              {`option ${i}`}
            </SelectOption>
          )
        })}
      </Select>,
    )
    const select = getByTestId('testId')
    fireEvent.click(select)
    const option = getByTestId(`opt_2`)
    expect(option).toBeChecked()
  })

  it('should be not nullable', () => {
    const { getByTestId } = render(
      <Select {...props}>
        {[...Array(5)].map((item, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption key={i} id={value} value={value} label={value} testId={value}>
              {`option ${i}`}
            </SelectOption>
          )
        })}
      </Select>,
    )
    const select = getByTestId('testId')
    fireEvent.click(select)
    const option = getByTestId(`opt_2`)
    expect(option).toBeChecked()
    fireEvent.click(option)
    expect(option).toBeChecked()
  })

  it('should be disabled', () => {
    const { getByTestId } = render(
      <Select {...props}>
        {[...Array(5)].map((item, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption key={i} id={value} value={value} label={value} testId={value} disabled={value === 'opt_2'}>
              {`option ${i}`}
            </SelectOption>
          )
        })}
      </Select>,
    )
    const select = getByTestId('testId')
    fireEvent.click(select)
    const option = getByTestId(`opt_2`)
    expect(option).toBeDisabled()
  })

  it('should have icon', () => {
    const { getByTestId } = render(
      <Select {...props}>
        {[...Array(5)].map((item, i) => {
          const value = `opt_${i}`
          return (
            <SelectOption key={i} id={value} value={value} label={value} testId={value} iconName='tri-alert'>
              {`option ${i}`}
            </SelectOption>
          )
        })}
      </Select>,
    )
    const select = getByTestId('testId')
    fireEvent.click(select)
    const option = getByTestId(`opt_2`)
    expect(option.nextSibling?.firstChild?.firstChild).toHaveClass('tri-alert')
  })
})
