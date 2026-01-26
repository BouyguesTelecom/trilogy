import { ComponentName } from '@/components/enumsComponentsName'
import SelectOption from '@/components/select/option/SelectOption.native'
import { SelectOptionProps } from '@/components/select/option/SelectOptionProps'
import React from 'react'
import { PromptSelectOptionNativeRef } from './PromptSelectOptionProps'

const PromptSelect = React.forwardRef<PromptSelectOptionNativeRef, SelectOptionProps>(({ ...others }, ref) => {
  return <SelectOption ref={ref} {...others} />
})

PromptSelect.displayName = ComponentName.PromptSelect
export default PromptSelect
