import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import React from 'react'
import { StyleSheet } from 'react-native'
import PromptButton from '../tools/button/PromptButton.native'
import { PromptMicrophoneNativeRef, PromptMicrophoneProps } from './PromptMicrophoneProps'

const PromptMicrophone = React.forwardRef<PromptMicrophoneNativeRef, PromptMicrophoneProps>(
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
      <PromptButton {...others} ref={ref}>
        <Icon
          name={IconName.MICRO}
          {...{
            style: styles.icon,
          }}
        />
      </PromptButton>
    )
  },
)

PromptMicrophone.displayName = ComponentName.PromptMicrophone
export default PromptMicrophone
