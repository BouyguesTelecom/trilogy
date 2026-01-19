import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import React from 'react'
import { StyleSheet } from 'react-native'
import PromptAiButton from '../button/PromptAiButton.native'
import { PromptAiInputFileNativeRef, PromptAiInputFileProps } from './PromptAiInputFileProps'

const PromptAiInputFile = React.forwardRef<PromptAiInputFileNativeRef, PromptAiInputFileProps>(({ ...others }, ref) => {
  const styles = StyleSheet.create({
    icon: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: 36,
    },
  })

  return (
    <PromptAiButton ref={ref} {...others}>
      <Icon
        name={IconName.ATTACHMENT}
        {...{
          style: styles.icon,
        }}
      />
    </PromptAiButton>
  )
})

PromptAiInputFile.displayName = ComponentName.PromptAiInputFile
export default PromptAiInputFile
