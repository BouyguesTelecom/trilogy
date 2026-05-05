import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { TimepickerCircular } from './circular'
import { TimepickerDefault } from './default'
import { TimepickerProps, TimepickerRef } from './TimepickerProps'

/**
 * Timepicker Component
 * @param value {string} Current time value in "HH:MM" format (e.g., "14:30", "23:59")
 * @param onChange {Function} Callback when time changes, receives the new "HH:MM" string
 * @param disabled {boolean} Disabled state (default: false)
 * @param step {number} Minute step increment (e.g., 5 for 5-minute steps, default: 5)
 * @param circular {boolean} Use circular clock picker instead of default scroll picker
 * @param label {string} Label text (non-circular mode only)
 * @param sample {string} Example text shown below the label (non-circular mode only)
 * @param help {string} Help text shown below the field (non-circular mode only)
 * @param required {boolean} Required field (non-circular mode only)
 * @param testId {string} Test Id for Test Integration
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 * @param id {string} Custom id attribute
 */
const Timepicker = React.forwardRef<TimepickerRef, TimepickerProps>(({ circular, ...props }, ref): JSX.Element => {
  if (circular) return <TimepickerCircular ref={ref} {...props} />
  return <TimepickerDefault ref={ref as React.Ref<HTMLInputElement>} {...props} />
})

Timepicker.displayName = ComponentName.Timepicker
export default Timepicker
