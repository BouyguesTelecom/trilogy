import {render} from '@testing-library/react-native'

import React from 'react'
import {AlertState, getAlertStyle, getColorStyle, TrilogyColor} from '../../../objects'
import Switch from '../Switch.native'

describe('Switch component', () => {
  const colors = [AlertState.ERROR, AlertState.INFO, AlertState.SUCCESS, AlertState.WARNING]

  test('Should return component', async () => {
    const {getByTestId} = render(<Switch/>)
    expect(getByTestId('switch-id').props.value).toBeFalsy()
    expect(getByTestId('switch-id').props.disabled).toBe(undefined)
  })

  test('Should return component checked', async () => {
    const {getByTestId} = render(<Switch checked/>)
    expect(getByTestId('switch-id').props.value).toBeTruthy()
    expect(getByTestId('switch-id').props.disabled).toBe(undefined)
  })

  test('Should be disabled', async () => {
    const {getByTestId} = render(<Switch disabled/>)
    expect(getByTestId('switch-id').props.disabled).toBeTruthy()
  })

  test('trackColor', async () => {
    const {getByTestId} = render(<Switch/>)
    expect(getByTestId('switch-id').props.tintColor).toBe('#646464')
    expect(getByTestId('switch-id').props.onTintColor).toBe(getColorStyle(TrilogyColor.MAIN))
  })

  colors.forEach((color) => {
    test(`true trackColor should have ${getAlertStyle(color)} color`, async () => {
      const {getByTestId} = render(<Switch alert={color}/>)
      expect(getByTestId('switch-id').props.onTintColor).toBe(getAlertStyle(color))
    })
  })
})
