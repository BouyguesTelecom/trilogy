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
        display: 'flex',
        gap: 16,
        paddingHorizontal: 16,
        paddingTop: 16,
        alignItems: 'center',
      }}
    />
  )
})

PromptAiToolbar.displayName = ComponentName.PromptAiToolbar
export default PromptAiToolbar
