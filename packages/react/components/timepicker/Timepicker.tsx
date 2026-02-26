import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { TimepickerCircular } from './circular'
import { TimepickerDefault } from './default'
import { TimepickerProps, TimepickerRef } from './TimepickerProps'

/**
 * Timepicker Native Component
 * @param value {string} Current time value in "HH:MM" format (e.g., "14:30", "24:00")
 * @param onChange {Function} Callback called when time changes, receives new "HH:MM" value
 * @param disabled {boolean} Disabled state of the component (default: false)
 * @param step {number} Step for minutes (e.g., 5 for 5-minute increments, default: 5)
 * @param circular {boolean} to have circular timepicker
 */
const Timepicker = React.forwardRef<TimepickerRef, TimepickerProps>(({ circular, ...props }, ref): JSX.Element => {
  if (circular) return <TimepickerCircular ref={ref} {...props} />
  return <TimepickerDefault ref={ref} {...props} />
})

Timepicker.displayName = ComponentName.Timepicker
export default Timepicker
