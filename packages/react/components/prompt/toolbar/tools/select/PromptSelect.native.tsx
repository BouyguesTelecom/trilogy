import { ComponentName } from '@/components/enumsComponentsName'
import { PromptContext } from '@/components/prompt/context'
import Select from '@/components/select/Select.native'
import { SelectNativeProps } from '@/components/select/SelectProps'
import React, { useContext } from 'react'
import { PromptSelectNativeRef } from './PromptSelectProps'

const PromptSelect = React.forwardRef<PromptSelectNativeRef, SelectNativeProps>(
  ({ disabled, readOnly, ...others }, ref) => {
    const { isDisabled, isReadonly } = useContext(PromptContext)
    const isDisable = isDisabled || disabled
    const isReadOnly = isReadonly || readOnly

    return (
      <Select
        readOnly={isReadOnly}
        disabled={isDisable}
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
          },
        }}
      />
    )
  },
)

PromptSelect.displayName = ComponentName.PromptSelect
export default PromptSelect
