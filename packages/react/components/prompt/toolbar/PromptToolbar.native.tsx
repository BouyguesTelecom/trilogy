import { GapSize } from '@/components/columns'
import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import React, { useContext } from 'react'
import { Pressable } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { PromptContext } from '../context'
import { PromptToolbarNativeRef, PromptToolbarProps } from './PromptToolbarProps'

const PromptToolbar = React.forwardRef<PromptToolbarNativeRef, PromptToolbarProps>(({ ...others }, ref) => {
  const { textareaRef } = useContext(PromptContext)
  const styles = memoStyles({
    view: {
      flexDirection: 'row',
      gap: GapSize.EIGHT,
      padding: SpacerSize.FOUR,
      alignItems: 'center',
      flexWrap: 'nowrap',
      justifyContent: 'flex-end',
    },
  })
  return <Pressable ref={ref} style={styles.view} onPress={() => textareaRef?.current?.focus()} {...others} />
})

PromptToolbar.displayName = ComponentName.PromptToolbar
export default PromptToolbar
