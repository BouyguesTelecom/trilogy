import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { TimepickerCircular } from './circular'
import { TimepickerProps, TimepickerRef } from './TimepickerProps'

const Timepicker = React.forwardRef<TimepickerRef, TimepickerProps>(({ circular, ...props }, ref): JSX.Element => {
  if (circular) return <TimepickerCircular ref={ref} {...props} />
  return <div>Timepicker web not implemented</div>
})

Timepicker.displayName = ComponentName.Timepicker
export default Timepicker
