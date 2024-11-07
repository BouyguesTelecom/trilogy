/**
 * range Interface
 */
import { Accessibility, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'

export type InputChangeEventHandlerNative = (event: { inputValue: number[]; inputName: string }) => void
export type InputChangeEventHandlerWeb = (event: { inputValue: number; inputName: string | undefined }) => void

export interface RangeProps extends Accessibility, Dev, CommonProps {
  min: number
  max: number
  label?: string
  valueCursorMin?: number
  valueCursorMax?: number
  labelValueCursorMin?: string
  labelValueCursorMax?: string
  onChangeMin?: InputChangeEventHandlerWeb
  onChangeMax?: InputChangeEventHandlerWeb
  nameMin?: string
  idMin?: string
  nameMax?: string
  idMax?: string
  gap?: number
  onChange?: InputChangeEventHandlerNative
}
