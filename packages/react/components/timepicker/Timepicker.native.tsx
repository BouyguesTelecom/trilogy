import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import TimepickerCircular from './circular/TimepickerCircular.native'
import TimepickerDefault from './default/TimepickerDefault.native'
import { TimepickerNativeRef, TimepickerProps } from './TimepickerProps'

const Timepicker = React.forwardRef<TimepickerNativeRef, TimepickerProps>(
  ({ circular, ...props }, ref): JSX.Element => {
    if (circular) return <TimepickerCircular ref={ref} {...props} />
    return <TimepickerDefault ref={ref} {...props} />
  },
)

Timepicker.displayName = ComponentName.Timepicker
export default Timepicker
