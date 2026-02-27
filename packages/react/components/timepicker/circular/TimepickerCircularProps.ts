import { TimepickerProps } from '@/components/timepicker/TimepickerProps'
import { type View } from 'react-native'

export type TimepickerCircularProps = Omit<Extract<TimepickerProps, { circular: true }>, 'circular'>

export type TimepickerCircularRef = HTMLDivElement
export type TimepickerCircularNativeRef = View
