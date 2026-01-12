import { ButtonVariant } from '@/components/button'
import Button from '@/components/button/Button.native'
import { ComponentName } from '@/components/enumsComponentsName'
import { IconName } from '@/components/icon'
import React from 'react'
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
    return <Button ref={ref} iconName={IconName.MICRO} variant={ButtonVariant.GHOST} {...others} />
  },
)

PromptAiMicrophone.displayName = ComponentName.PromptAiMicrophone
export default PromptAiMicrophone
