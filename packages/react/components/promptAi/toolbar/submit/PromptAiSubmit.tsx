import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { PromptAiContext } from '../../PromptAi'
import { PromptAiSubmitProps, PromptAiSubmitRef, PromptAiSubmitStatus } from './PromptAiSubmitProps'

const PromptAiSubmit = React.forwardRef<PromptAiSubmitRef, PromptAiSubmitProps>(
  ({ className, iconName = 'tri-arrow-up', status = PromptAiSubmitStatus.STREAMING_OFF, ...others }, ref) => {
    const [statusSubmit, setStatusSubmit] = useState(status)
    const { styled } = useTrilogyContext()
    const { isReadyToSubmit } = useContext(PromptAiContext)
    const classesStop = hashClass(styled, clsx('prompt_ai-stop_streaming'))

    const onClick = useCallback(() => {
      if (statusSubmit === PromptAiSubmitStatus.STREAMING_ON) {
        setStatusSubmit(PromptAiSubmitStatus.STREAMING_OFF)
      }
    }, [statusSubmit])

    const isActive = useMemo(
      () => statusSubmit === PromptAiSubmitStatus.STREAMING_ON || isReadyToSubmit,
      [statusSubmit, isReadyToSubmit],
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

    useEffect(() => {
      setStatusSubmit(status)
    }, [status])

    return (
      <Button
        disabled={!isActive}
        ref={ref}
        iconName={statusSubmit === PromptAiSubmitStatus.STREAMING_OFF ? iconName : undefined}
        variant={ButtonVariant.GHOST}
        className={classesBtn}
        type='submit'
        onClick={onClick}
        {...others}
      >
        {statusSubmit === PromptAiSubmitStatus.STREAMING_ON && <div className={classesStop} />}
      </Button>
    )
  },
)

PromptAiSubmit.displayName = ComponentName.PromptAiSubmit
export default PromptAiSubmit
