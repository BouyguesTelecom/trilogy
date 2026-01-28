import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { IconName } from '@/components/icon'
import clsx from 'clsx'
import React, { useContext } from 'react'
import { PromptContext } from '../../context'
import { PromptMicrophoneProps, PromptMicrophoneRef } from './PromptMicrophoneProps'

const PromptMicrophone = React.forwardRef<PromptMicrophoneRef, PromptMicrophoneProps>(
  ({ className, onClick, disabled = false, isListening, ...others }, ref) => {
    const { isTyping } = useContext(PromptContext)
    const classes = clsx('prompt-toolbar-tool prompt-toolbar-microphone icon_only', className)
    if (isTyping) return null

    return (
      <Button
        ref={ref}
        iconName={IconName.MICRO}
        className={classes}
        variant={isListening ? ButtonVariant.PRIMARY : ButtonVariant.GHOST}
        onClick={onClick}
        disabled={disabled}
        {...others}
      />
    )
  },
)

PromptMicrophone.displayName = ComponentName.PromptMicrophone
export default PromptMicrophone
