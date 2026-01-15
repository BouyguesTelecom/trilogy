import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { View } from 'react-native'
import { PromptAiToolsNativeRef, PromptAiToolsProps } from './PromptAiToolsProps'

const PromptAiTools = React.forwardRef<PromptAiToolsNativeRef, PromptAiToolsProps>(({ ...others }, ref) => {
  return (
    <View
      ref={ref}
      {...others}
      style={{
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
        marginRight: 'auto',
        flexWrap: 'nowrap',
      }}
    />
  )
})

PromptAiTools.displayName = ComponentName.PromptAiTools
export default PromptAiTools
