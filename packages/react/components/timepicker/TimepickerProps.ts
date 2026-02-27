import { CommonProps } from '@/objects/facets/CommonProps'
import { type TextInput, type View } from 'react-native'

/**
 * Timepicker Interface (shared props for both default and circular)
 */
export interface TimepickerProps extends CommonProps {
  value?: string
  onChange?: (time: string) => void
  disabled?: boolean
  step?: number
  circular?: boolean
  label?: string
  sample?: string
  required?: boolean
  help?: string
}

export type TimepickerRef = HTMLDivElement
export type TimepickerNativeRef = View | TextInput
