import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { DropdownItemNativeRef, DropdownItemProps } from './DropdownItemProps'

const DropdownItem = React.forwardRef<DropdownItemNativeRef, DropdownItemProps>((props, ref): JSX.Element => {
  return (
    <></>
  )
})

DropdownItem.displayName = ComponentName.DropdownItem

export default DropdownItem
