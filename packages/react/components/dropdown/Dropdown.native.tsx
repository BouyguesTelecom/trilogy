import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { DropdownNativeRef, DropdownProps } from './DropdownProps'

const Dropdown = React.forwardRef<DropdownNativeRef, DropdownProps>((props, ref): JSX.Element => {
  return (
    <></>
  )
})

Dropdown.displayName = ComponentName.Dropdown

export default Dropdown
