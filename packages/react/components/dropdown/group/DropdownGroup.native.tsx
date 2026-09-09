import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { DropdownGroupNativeRef, DropdownGroupProps } from '@/components/dropdown/group/DropdownGroupProps'

const DropdownGroup = React.forwardRef<DropdownGroupNativeRef, DropdownGroupProps>((props, ref): JSX.Element => {
  return (
    <></>
  )
})

DropdownGroup.displayName = ComponentName.DropdownGroup

export default DropdownGroup
