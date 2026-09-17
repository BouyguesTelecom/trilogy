import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { PromptToolsNativeRef, PromptToolsProps } from '@/components/prompt/toolbar/tools/PromptToolsProps'
import { View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'

const PromptTools = React.forwardRef<PromptToolsNativeRef, PromptToolsProps>(({ ...others }, ref) => {
  const styles = memoStyles({
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
