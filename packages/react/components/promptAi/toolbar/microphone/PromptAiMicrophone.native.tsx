import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import React from 'react'
import { StyleSheet } from 'react-native'
import PromptAiButton from '../tools/button/PromptAiButton.native'
import { PromptAiMicrophoneNativeRef, PromptAiMicrophoneProps } from './PromptAiMicrophoneProps'

const PromptAiMicrophone = React.forwardRef<PromptAiMicrophoneNativeRef, PromptAiMicrophoneProps>(
  (
    {
      className,
      onSpeechStart,
      onSpeechResult,
      onSpeechEnd,
      onSpeechError,
      language = 'fr-FR',
      disabled = false,
      ...others
    },
    ref,
  ) => {
    const styles = StyleSheet.create({
      icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 36,
      },
    })

    return (
      <PromptAiButton {...others} ref={ref}>
        <Icon
          name={IconName.MICRO}
          {...{
            style: styles.icon,
          }}
        />
      </PromptAiButton>
    )
  },
)

PromptAiMicrophone.displayName = ComponentName.PromptAiMicrophone
export default PromptAiMicrophone
