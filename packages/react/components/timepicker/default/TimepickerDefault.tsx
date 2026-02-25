import React from 'react'
import { ComponentName } from '@/components/enumsComponentsName'

const TimepickerDefault = React.forwardRef<any, any>(({ disabled, others, id, children }, ref): JSX.Element => {
  return <></>
})

TimepickerDefault.displayName = ComponentName.Timepicker
export default TimepickerDefault
