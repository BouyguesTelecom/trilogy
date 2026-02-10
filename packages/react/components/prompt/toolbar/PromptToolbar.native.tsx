import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { PromptToolbarNativeRef, PromptToolbarProps } from './PromptToolbarProps'

const PromptToolbar = React.forwardRef<PromptToolbarNativeRef, PromptToolbarProps>(({ ...others }, ref) => {
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

PromptToolbar.displayName = ComponentName.PromptToolbar
export default PromptToolbar
