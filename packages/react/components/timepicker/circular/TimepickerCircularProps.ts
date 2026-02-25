import { TimepickerProps } from '@/components/timepicker/TimepickerProps'
import { type View } from 'react-native'

/**
 * TimepickerCircular Interface
 */
export interface TimepickerCircularProps extends Omit<TimepickerProps, 'circular'> {}

export type TimepickerCircularRef = HTMLDivElement
export type TimepickerCircularNativeRef = View
