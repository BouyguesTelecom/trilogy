import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PromptAiToolsNativeRef, PromptAiToolsProps } from './PromptAiToolsProps'

const PromptAiTools = React.forwardRef<PromptAiToolsNativeRef, PromptAiToolsProps>(({ ...others }, ref) => {
  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row',
      gap: GapSize.EIGHT,
      alignItems: 'center',
      marginRight: 'auto',
      flexWrap: 'nowrap',
    },
  })

  return <View ref={ref} style={styles.view} {...others} />
})

PromptAiTools.displayName = ComponentName.PromptAiTools
export default PromptAiTools
