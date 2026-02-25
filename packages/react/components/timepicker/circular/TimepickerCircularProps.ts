import { TimepickerProps } from '../TimepickerProps'
import { type View } from 'react-native'

/**
 * TimepickerCircular Interface
 */
export interface TimepickerCircularProps extends Omit<TimepickerProps, 'circular'> {}

export type TimepickerCircularRef = HTMLDivElement
export type TimepickerCircularNativeRef = View
