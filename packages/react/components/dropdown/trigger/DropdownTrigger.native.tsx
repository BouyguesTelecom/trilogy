import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef } from 'react'
import { DropdownTriggerNativeRef, DropdownTriggerProps } from './DropdownTriggerProps'

const DropdownTrigger = forwardRef<DropdownTriggerNativeRef, DropdownTriggerProps>((props, ref): JSX.Element => {
  return (
    <></>
  )
})

DropdownTrigger.displayName = ComponentName.DropdownTrigger

export default DropdownTrigger
