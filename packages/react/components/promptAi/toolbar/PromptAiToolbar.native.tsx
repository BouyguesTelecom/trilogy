import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { View } from 'react-native'
import { PromptAiToolbarNativeRef, PromptAiToolbarProps } from './PromptAiToolbarProps'

const PromptAiToolbar = React.forwardRef<PromptAiToolbarNativeRef, PromptAiToolbarProps>(({ ...others }, ref) => {
  return (
    <View
      ref={ref}
      {...others}
      style={{
        flexDirection: 'row',
        gap: 16,
        padding: 16,
        alignItems: 'center',
        flexWrap: 'nowrap',
      }}
    />
  )
})

PromptAiToolbar.displayName = ComponentName.PromptAiToolbar
export default PromptAiToolbar
