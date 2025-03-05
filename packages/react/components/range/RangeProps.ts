/**
 * range Interface
 */
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export type InputChangeEventHandlerNative = (event: { inputValue: number[]; inputName: string }) => void
export type InputChangeEventHandlerWeb = (event: { inputValue: number; inputName: string | undefined }) => void

export interface RangeProps extends Accessibility, Dev, CommonProps {
  min: number
  max: number
  label?: string
  valueMin?: number
  valueMax?: number
  unit?: string
  onChangeMin?: InputChangeEventHandlerWeb
  onChangeMax?: InputChangeEventHandlerWeb
  name?: string
  gap?: number
  onChange?: InputChangeEventHandlerNative
}

export type RangeRef = HTMLDivElement
export type RangeNativeRef = View
