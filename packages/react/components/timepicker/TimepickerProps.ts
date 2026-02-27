import { CommonProps } from '@/objects/facets/CommonProps'
import { type TextInput, type View } from 'react-native'

interface BaseTimepickerProps extends CommonProps {
  value?: string
  onChange?: (time: string) => void
  disabled?: boolean
  step?: number
}

interface DefaultTimepickerProps extends BaseTimepickerProps {
  circular?: false
  label?: string
  sample?: string
  required?: boolean
  help?: string
}

interface CircularTimepickerProps extends BaseTimepickerProps {
  circular: true
}

export type TimepickerProps = DefaultTimepickerProps | CircularTimepickerProps
export type TimepickerRef = HTMLDivElement | HTMLInputElement
export type TimepickerNativeRef = View | TextInput
