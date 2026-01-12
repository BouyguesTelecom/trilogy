import { ComponentName } from '@/components/enumsComponentsName'
import Select from '@/components/select/Select.native'
import React from 'react'
import { PromptAiSelectNativeRef, PromptAiSelectProps } from './PromptAiSelectProps'

const PromptAiSelect = React.forwardRef<PromptAiSelectNativeRef, PromptAiSelectProps>(({ ...others }, ref) => {
  return <Select ref={ref} {...others} />
})

PromptAiSelect.displayName = ComponentName.PromptAiSelect
export default PromptAiSelect
