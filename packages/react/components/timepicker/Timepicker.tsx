import * as React from 'react'
import { ComponentName } from '../enumsComponentsName'
import { View } from '../view'
import { TimepickerCircular } from './circular'

const Timepicker = React.forwardRef<any, any>(({ selected, circular, ...props }, ref): JSX.Element => {
  if (circular) return <TimepickerCircular />
  return <View style={{ width: 20, height: 20, backgroundColor: 'red' }} />
})

Timepicker.displayName = ComponentName.Timepicker
export default Timepicker
