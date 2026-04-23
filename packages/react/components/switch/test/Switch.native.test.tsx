import { fireEvent, render } from '@testing-library/react-native'

import * as React from 'react'
import { StatusState, getStatusStyle } from '../../../objects'
import Switch from '../Switch.native'

describe('Switch component', () => {
  const colors = [StatusState.ERROR, StatusState.INFO, StatusState.SUCCESS, StatusState.WARNING]

  test('Should return component', async () => {
    const { getByTestId } = render(<Switch />)
    expect(getByTestId('switch-id')).toBeTruthy()
    expect(getByTestId('switch-id').props.disabled).toBe(undefined)
  })

  test('Should return component checked', async () => {
    const { getByTestId } = render(<Switch checked />)
    expect(getByTestId('switch-id')).toBeTruthy()
    expect(getByTestId('switch-id').props.disabled).toBe(undefined)
  })

  test('Should be disabled', async () => {
    const onChange = jest.fn()
    const { getByTestId } = render(<Switch disabled onChange={onChange} />)
    fireEvent.press(getByTestId('switch-id'))

    expect(onChange).not.toHaveBeenCalled()
  })

  test('Should call onChange when pressed', async () => {
    const onChange = jest.fn()
    const { getByTestId } = render(<Switch onChange={onChange} name='mySwitch' />)
    fireEvent.press(getByTestId('switch-id'))

    expect(onChange).toHaveBeenCalledWith({ switchState: true, switchName: 'mySwitch' })
  })

  test('Should not call onChange when readonly', async () => {
    const onChange = jest.fn()
    const { getByTestId } = render(<Switch readonly onChange={onChange} />)
    fireEvent.press(getByTestId('switch-id'))

    expect(onChange).not.toHaveBeenCalled()
  })

  colors.forEach((color) => {
    test(`true trackColor should have ${getStatusStyle(color).color} color`, async () => {
      const { getByTestId } = render(<Switch status={color} />)
      expect(getByTestId('switch-id')).toBeTruthy()
    })
  })
})
