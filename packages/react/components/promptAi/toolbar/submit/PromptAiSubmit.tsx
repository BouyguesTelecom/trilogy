import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { IconName } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { PromptAiContext } from '../../context'
import { PromptAiSubmitProps, PromptAiSubmitRef, PromptAiSubmitStatus } from './PromptAiSubmitProps'

const PromptAiSubmit = React.forwardRef<PromptAiSubmitRef, PromptAiSubmitProps>(
  ({ className, status = PromptAiSubmitStatus.STREAMING_OFF, onSubmit, ...others }, ref) => {
    const [statusSubmit, setStatusSubmit] = useState(status)
    const { styled } = useTrilogyContext()
    const { isReadyToSubmit, files, setFiles } = useContext(PromptAiContext)
    const classesStop = hashClass(styled, clsx('prompt_ai-stop_streaming'))

    const onClick = useCallback(() => {
      switch (statusSubmit) {
        case PromptAiSubmitStatus.STREAMING_ON:
          setStatusSubmit(PromptAiSubmitStatus.STREAMING_OFF)
          break
        default:
          onSubmit?.()
          setFiles([])
      }
    }, [statusSubmit, onSubmit])

    const isActive = useMemo(
      () => statusSubmit === PromptAiSubmitStatus.STREAMING_ON || isReadyToSubmit || !!files.length,
      [statusSubmit, isReadyToSubmit, files.length],
    )

    const classesBtn = hashClass(
      styled,
      clsx(
        'prompt_ai-toolbar-tool icon_only prompt_ai-toolbar-tool-submit',
        isActive && 'active',
        status === PromptAiSubmitStatus.STREAMING_ON && 'streaming',
        className,
      ),
    )

    const onMouseDown = (e: React.MouseEvent) => {
      e.preventDefault()
    }

    useEffect(() => {
      setStatusSubmit(status)
    }, [status])

    return (
      <Button
        disabled={!isActive}
        ref={ref}
        iconName={statusSubmit === PromptAiSubmitStatus.STREAMING_OFF ? IconName.ARROW_UP : undefined}
        variant={ButtonVariant.GHOST}
        className={classesBtn}
        type='submit'
        onClick={onClick}
        {...{ ...others, onMouseDown }}
      >
        {statusSubmit === PromptAiSubmitStatus.STREAMING_ON && <div className={classesStop} />}
      </Button>
    )
  },
)

PromptAiSubmit.displayName = ComponentName.PromptAiSubmit
export default PromptAiSubmit
