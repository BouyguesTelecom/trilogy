import { Button, ButtonVariant } from '@/components/button'
import { ComponentName } from '@/components/enumsComponentsName'
import { IconName } from '@/components/icon'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { PromptContext } from '../../context'
import { PromptSubmitProps, PromptSubmitRef, PromptSubmitStatus } from './PromptSubmitProps'

const PromptSubmit = React.forwardRef<PromptSubmitRef, PromptSubmitProps>(
  ({ className, status = PromptSubmitStatus.STREAMING_OFF, onSubmit, onCancelSubmit, ...others }, ref) => {
    const [statusSubmit, setStatusSubmit] = useState(status)
    const { styled } = useTrilogyContext()
    const { text, files } = useContext(PromptContext)
    const classesStop = hashClass(styled, clsx('prompt-stop_streaming'))

    const onClick = useCallback(() => {
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

    const classesBtn = hashClass(
      styled,
      clsx(
        'prompt-toolbar-tool icon_only prompt-toolbar-tool-submit',
        isActive && 'active',
        status === PromptSubmitStatus.STREAMING_ON && 'streaming',
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
