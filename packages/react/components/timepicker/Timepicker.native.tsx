import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { TimepickerCircular } from './circular'
import { TimepickerDefault } from './default'

const Timepicker = React.forwardRef<any, any>(({ selected, circular, ...props }, ref): JSX.Element => {
  if (circular) return <TimepickerCircular />
  return <TimepickerDefault />
})

Timepicker.displayName = ComponentName.Timepicker
export default Timepicker
