import { ComponentName } from '@/components/enumsComponentsName'
import SelectOption from '@/components/select/option/SelectOption.native'
import { SelectOptionProps } from '@/components/select/option/SelectOptionProps'
import { PromptSelectOptionNativeRef } from '@/components/prompt/toolbar/tools/select/options/PromptSelectOptionProps'
import { forwardRef } from 'react'

const PromptSelectOption = forwardRef<PromptSelectOptionNativeRef, SelectOptionProps>(({ ...others }, ref) => {
  return <SelectOption ref={ref} {...others} />
})

PromptSelectOption.displayName = ComponentName.PromptSelectOption
export default PromptSelectOption
