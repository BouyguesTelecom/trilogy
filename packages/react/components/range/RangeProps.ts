/**
 * range Interface
 */
import { View } from 'react-native'
import { Accessibility, Dev } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

export type InputChangeEventHandlerNative = (event: {
  inputValue: number[] | number
  inputName: string | undefined
}) => void
export type InputChangeEventHandlerWeb = (event: { inputValue: number; inputName: string | undefined }) => void

export interface RangeProps extends Accessibility, Dev, CommonProps {
  min: number
  max: number
  label?: string
  value?: number
  valueMin?: number
  valueMax?: number
  unit?: string
  onChangeMin?: InputChangeEventHandlerWeb
  onChangeMax?: InputChangeEventHandlerWeb
  name?: string
  gap?: number
  onChange?: InputChangeEventHandlerNative
  simple?: boolean
}

export interface RangeNativeProps extends Omit<RangeProps, 'value'> {
  value?: number[]
}

export type RangeRef = HTMLDivElement
export type RangeNativeRef = View
