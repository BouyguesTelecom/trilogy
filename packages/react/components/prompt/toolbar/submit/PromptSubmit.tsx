import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { IconName } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { PromptContext } from '../../context'
import { PromptSubmitProps, PromptSubmitRef, PromptSubmitStatus } from './PromptSubmitProps'

/**
 * PromptSubmit component - Submit button for prompt with streaming support
 * @param status {PromptSubmitStatus} Current status of the submit button (streaming on/off)
 * @param onSubmit {Function} Callback function when submit button is clicked
 * @param onCancelSubmit {Function} Callback function when cancel/stop streaming is clicked
 * @param disabled {boolean} Whether the submit button is disabled
 * @param readOnly {boolean} Whether the submit button is read-only
 * @param className {string} Additional CSS classes (ONLY FOR WEB)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 */
const PromptSubmit = React.forwardRef<PromptSubmitRef, PromptSubmitProps>(
  (
    { className, status = PromptSubmitStatus.STREAMING_OFF, onSubmit, onCancelSubmit, disabled, readOnly, ...others },
    ref,
  ) => {
    const [statusSubmit, setStatusSubmit] = useState(status)
    const { styled } = useTrilogyContext()
    const { text, files, isDisabled, isReadonly } = useContext(PromptContext)

    const isDisable = isDisabled || disabled
    const isReadOnly = isReadonly || readOnly
    const classesStop = hashClass(styled, clsx('prompt-stop_streaming'))

    const onClick = useCallback(() => {
      if (isDisable || isReadOnly) return
      switch (statusSubmit) {
        case PromptSubmitStatus.STREAMING_ON:
          setStatusSubmit(PromptSubmitStatus.STREAMING_OFF)
          onCancelSubmit?.()
          break
        default:
          onSubmit?.()
      }
    }, [statusSubmit, onSubmit])

    const isActive = useMemo(
      () => statusSubmit === PromptSubmitStatus.STREAMING_ON || !!text.trim().length || !!files,
      [statusSubmit, text, files],
    )

    const classesBtn = clsx(
      'prompt-toolbar-tool icon_only prompt-toolbar-tool-submit',
      isActive && 'active',
      status === PromptSubmitStatus.STREAMING_ON && 'streaming',
      className,
    )

    const onMouseDown = (e: React.MouseEvent) => {
      e.preventDefault()
    }

    useEffect(() => {
      setStatusSubmit(status)
    }, [status])

    return (
      <Button
        disabled={!isActive || isDisable}
        ref={ref}
        iconName={statusSubmit === PromptSubmitStatus.STREAMING_OFF ? IconName.ARROW_UP : undefined}
        variant={ButtonVariant.PRIMARY}
        className={classesBtn}
        type='submit'
        onClick={onClick}
        {...{ ...others, onMouseDown }}
      >
        {statusSubmit === PromptSubmitStatus.STREAMING_ON && <div className={classesStop} />}
      </Button>
    )
  },
)

PromptSubmit.displayName = ComponentName.PromptSubmit
export default PromptSubmit
