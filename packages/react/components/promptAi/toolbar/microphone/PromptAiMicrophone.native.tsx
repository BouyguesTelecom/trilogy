import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName } from '@/components/icon'
import React from 'react'
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
    return (
      <PromptAiButton {...others} ref={ref}>
        <Icon
          name={IconName.MICRO}
          {...{
            style: {
              flexDirection: 'row',
              justifyContent: 'center',
              width: 36,
            },
          }}
        />
      </PromptAiButton>
    )
  },
)

PromptAiMicrophone.displayName = ComponentName.PromptAiMicrophone
export default PromptAiMicrophone
