import { type TextInput, type View } from 'react-native'
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

interface BaseTimepickerProps extends CommonProps, Dev {
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
