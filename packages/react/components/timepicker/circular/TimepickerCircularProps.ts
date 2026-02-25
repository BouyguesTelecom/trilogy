import { CommonProps } from '@/objects/facets/CommonProps'
import { type View } from 'react-native'

/**
 * TimepickerCircular Interface
 */
export interface TimepickerCircularProps extends CommonProps {
  value?: string
  onChange?: (time: string) => void
  disabled?: boolean
  step?: number
}

export type TimepickerCircularRef = HTMLDivElement
export type TimepickerCircularNativeRef = View
