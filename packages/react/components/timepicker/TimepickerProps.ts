import { CommonProps } from '@/objects/facets/CommonProps'
import { type View } from 'react-native'

/**
 * Timepicker Interface (shared props for both default and circular)
 */
export interface TimepickerProps extends CommonProps {
  /** Current time value in "HH:MM" format (e.g., "14:30", "24:00") */
  value?: string
  /** Callback called when time changes, receives new "HH:MM" value */
  onChange?: (time: string) => void
  /** Disabled state of the component */
  disabled?: boolean
  /** Step for minutes (e.g., 5 for 5-minute increments) */
  step?: number
  /** Use circular variant */
  circular?: boolean
}

export type TimepickerRef = HTMLDivElement
export type TimepickerNativeRef = View
