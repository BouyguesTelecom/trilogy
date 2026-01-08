import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { DropdownGroupNativeRef, DropdownGroupProps } from './DropdownGroupProps'

const DropdownGroup = React.forwardRef<DropdownGroupNativeRef, DropdownGroupProps>((props, ref): JSX.Element => {
  return (
    <></>
  )
})

DropdownGroup.displayName = ComponentName.DropdownGroup

export default DropdownGroup
