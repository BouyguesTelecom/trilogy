import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef } from 'react'
import { DropdownItemNativeRef, DropdownItemProps } from '@/components/dropdown/item/DropdownItemProps'

const DropdownItem = forwardRef<DropdownItemNativeRef, DropdownItemProps>((props, ref): JSX.Element => {
  return <></>
})

DropdownItem.displayName = ComponentName.DropdownItem

export default DropdownItem
