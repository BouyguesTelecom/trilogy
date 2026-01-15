import { ButtonVariant } from '@/components/button'
import Button from '@/components/button/Button.native'
import { ComponentName } from '@/components/enumsComponentsName'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { PromptAiContext } from '../../context'
import { PromptAiSubmitNativeRef, PromptAiSubmitProps, PromptAiSubmitStatus } from './PromptAiSubmitProps'

const PromptAiSubmit = React.forwardRef<PromptAiSubmitNativeRef, PromptAiSubmitProps>(
  ({ iconName = 'tri-arrow-up', status = PromptAiSubmitStatus.STREAMING_OFF, ...others }, ref) => {
    const [statusSubmit, setStatusSubmit] = useState(status)
    const { isReadyToSubmit, files } = useContext(PromptAiContext)

    const onClick = useCallback(() => {
      if (statusSubmit === PromptAiSubmitStatus.STREAMING_ON) {
        setStatusSubmit(PromptAiSubmitStatus.STREAMING_OFF)
      }
    }, [statusSubmit])

    const isActive = useMemo(
      () => statusSubmit === PromptAiSubmitStatus.STREAMING_ON || isReadyToSubmit || !!files.length,
      [statusSubmit, isReadyToSubmit, files.length],
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
        iconName={statusSubmit === PromptAiSubmitStatus.STREAMING_OFF ? iconName : undefined}
        variant={ButtonVariant.GHOST}
        onClick={onClick}
        {...{ ...others, onMouseDown }}
      />
    )
  },
)

PromptAiSubmit.displayName = ComponentName.PromptAiSubmit
export default PromptAiSubmit
