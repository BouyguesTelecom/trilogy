import { ComponentName } from '@/components/enumsComponentsName'
import Select from '@/components/select/Select.native'
import { SelectNativeProps } from '@/components/select/SelectProps'
import React from 'react'
import { PromptAiSelectNativeRef } from './PromptAiSelectProps'

const PromptAiSelect = React.forwardRef<PromptAiSelectNativeRef, SelectNativeProps>(({ ...others }, ref) => {
  return (
    <Select
      ref={ref}
      {...{
        ...others,
      }}
    />
  )
})

PromptAiSelect.displayName = ComponentName.PromptAiSelect
export default PromptAiSelect
