import { type View } from 'react-native'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * TimepickerCircular Interface
 */
export interface TimepickerCircularProps extends CommonProps {
  /** Current hours value (0-23) */
  hours?: number
  /** Current minutes value (0-59) */
  minutes?: number
  /** Callback when time changes */
  onChange?: (hours: number, minutes: number) => void
  /** Label for hours input */
  hoursLabel?: string
  /** Label for minutes input */
  minutesLabel?: string
  /** Size of the circular picker (default: 172) */
  size?: number
  /** Thickness of the circular track (default: 32) */
  thickness?: number
  /** Disabled state */
  disabled?: boolean
  /** Step increment for minutes when dragging (default: 5) */
  step?: number
  /** Minimum time (format "HH:MM") */
  minTime?: string
  /** Maximum time (format "HH:MM") */
  maxTime?: string
}

export type TimepickerCircularRef = HTMLDivElement
export type TimepickerCircularNativeRef = View
