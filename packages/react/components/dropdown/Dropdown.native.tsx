import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef } from 'react'
import { DropdownNativeRef, DropdownProps } from '@/components/dropdown/DropdownProps'

const Dropdown = forwardRef<DropdownNativeRef, DropdownProps>((props, ref): JSX.Element => {
  return <></>
})

Dropdown.displayName = ComponentName.Dropdown

export default Dropdown
