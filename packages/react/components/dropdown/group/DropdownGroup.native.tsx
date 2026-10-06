import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef } from 'react'
import { DropdownGroupNativeRef, DropdownGroupProps } from './DropdownGroupProps'

const DropdownGroup = forwardRef<DropdownGroupNativeRef, DropdownGroupProps>((props, ref): JSX.Element => {
  return (
    <></>
  )
})

DropdownGroup.displayName = ComponentName.DropdownGroup

export default DropdownGroup
