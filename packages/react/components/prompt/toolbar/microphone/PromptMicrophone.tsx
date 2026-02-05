import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { IconName } from '@/components/icon'
import { OnClickEvent } from '@/events/OnClickEvent'
import clsx from 'clsx'
import React, { useContext } from 'react'
import { PromptContext } from '../../context'
import { PromptMicrophoneProps, PromptMicrophoneRef } from './PromptMicrophoneProps'

const PromptMicrophone = React.forwardRef<PromptMicrophoneRef, PromptMicrophoneProps>(
  ({ className, onClick, disabled = false, isListening, readOnly, ...others }, ref) => {
    const { isTyping, isDisabled, isReadonly } = useContext(PromptContext)
    const isDisable = isDisabled || disabled
    const isReadOnly = isReadonly || readOnly

    const handleClick = (e: OnClickEvent) => {
      if (!isDisable && !isReadOnly && onClick) {
        onClick(e)
      }
    }

    const classes = clsx('prompt-toolbar-tool prompt-toolbar-microphone icon_only', className)
    if (isTyping) return null

    return (
      <Button
        ref={ref}
        iconName={IconName.MICRO}
        className={classes}
        variant={isListening ? ButtonVariant.PRIMARY : ButtonVariant.GHOST}
        onClick={handleClick}
        disabled={isDisable}
        {...{ ...others }}
      />
    )
  },
)

PromptMicrophone.displayName = ComponentName.PromptMicrophone
export default PromptMicrophone
