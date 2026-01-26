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
          borderWidth: 0,
          height: 36,
          maxWidth: '100%',
        },
        inputStyle: {
          width: '100%',
          paddingRight: 40,
          paddingLeft: 0,
        },
      }}
    />
  )
})

PromptAiSelect.displayName = ComponentName.PromptAiSelect
export default PromptAiSelect
