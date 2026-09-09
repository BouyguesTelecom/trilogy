import { ComponentName } from '@/components/enumsComponentsName'
import SelectOption from '@/components/select/option/SelectOption.native'
import { SelectOptionProps } from '@/components/select/option/SelectOptionProps'
import React from 'react'
import { PromptSelectOptionNativeRef } from '@/components/prompt/toolbar/tools/select/options/PromptSelectOptionProps'

const PromptSelectOption = React.forwardRef<PromptSelectOptionNativeRef, SelectOptionProps>(({ ...others }, ref) => {
  return <SelectOption ref={ref} {...others} />
})

PromptSelectOption.displayName = ComponentName.PromptSelectOption
export default PromptSelectOption
