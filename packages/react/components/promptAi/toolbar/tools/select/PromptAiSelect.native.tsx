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
        wrapper: {
          borderwidth: 0,
          height: 36,
          borderWidth: 0,
        },
      }}
    />
  )
})

PromptAiSelect.displayName = ComponentName.PromptAiSelect
export default PromptAiSelect
