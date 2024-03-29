/**
 * range Interface
 */
import { Accessibility } from '../../objects'

export interface InputChangeEvent {
  inputName: string
  inputValue: string | number[]
}

export type InputChangeEventHandler = (event: InputChangeEvent) => void

export interface RangeProps extends Accessibility {
  min: number
  max: number
  label?: string
  valueCursorMin?: number
  valueCursorMax?: number
  labelValueCursorMin?: string
  labelValueCursorMax?: string
  onChangeMin?: InputChangeEventHandler
  onChangeMax?: InputChangeEventHandler
  nameMin?: string
  idMin?: string
  nameMax?: string
  idMax?: string
  gap?: number
  onChange?: InputChangeEventHandler
}
