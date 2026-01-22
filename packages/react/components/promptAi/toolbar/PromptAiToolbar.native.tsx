import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PromptAiToolbarNativeRef, PromptAiToolbarProps } from './PromptAiToolbarProps'

const PromptAiToolbar = React.forwardRef<PromptAiToolbarNativeRef, PromptAiToolbarProps>(({ ...others }, ref) => {
  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row',
      gap: GapSize.EIGHT,
      padding: SpacerSize.FOUR,
      alignItems: 'center',
      flexWrap: 'nowrap',
      justifyContent: 'flex-end',
    },
  })
  return <View ref={ref} style={styles.view} {...others} />
})

PromptAiToolbar.displayName = ComponentName.PromptAiToolbar
export default PromptAiToolbar
