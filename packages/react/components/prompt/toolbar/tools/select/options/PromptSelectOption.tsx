import { ComponentName } from '@/components/enumsComponentsName'
import { SelectOption } from '@/components/select'
import { SelectOptionProps } from '@/components/select/option/SelectOptionProps'
import React from 'react'
import { PromptSelectOptionRef } from './PromptSelectOptionProps'

const PromptSelect = React.forwardRef<PromptSelectOptionRef, SelectOptionProps>(({ ...others }, ref) => {
  return <SelectOption ref={ref} {...others} />
})

PromptSelect.displayName = ComponentName.PromptSelect
export default PromptSelect
