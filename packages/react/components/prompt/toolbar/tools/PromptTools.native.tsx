import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PromptToolsNativeRef, PromptToolsProps } from './PromptToolsProps'

const PromptTools = React.forwardRef<PromptToolsNativeRef, PromptToolsProps>(({ ...others }, ref) => {
  const styles = StyleSheet.create({
    view: {
      flexDirection: 'row',
      gap: GapSize.EIGHT,
      alignItems: 'center',
      marginRight: 'auto',
      flexWrap: 'nowrap',
      maxWidth: '50%',
    },
  })

  return <View ref={ref} style={styles.view} {...others} />
})

PromptTools.displayName = ComponentName.PromptTools
export default PromptTools
