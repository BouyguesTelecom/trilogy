import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'

const TimepickerDefault = React.forwardRef<any, any>(({ disabled, others, id, children }, ref): JSX.Element => {
  return <></>
})

TimepickerDefault.displayName = ComponentName.Timepicker
export default TimepickerDefault
