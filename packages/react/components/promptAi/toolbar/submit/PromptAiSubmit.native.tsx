import { ButtonVariant } from '@/components/button'
import Button from '@/components/button/Button.native'
import { ComponentName } from '@/components/enumsComponentsName'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import { PromptAiContext } from '../../context'
import { PromptAiSubmitNativeRef, PromptAiSubmitProps, PromptAiSubmitStatus } from './PromptAiSubmitProps'

const PromptAiSubmit = React.forwardRef<PromptAiSubmitNativeRef, PromptAiSubmitProps>(
  ({ iconName = 'tri-arrow-up', status = PromptAiSubmitStatus.STREAMING_OFF, ...others }, ref) => {
    const [statusSubmit, setStatusSubmit] = useState(status)
    const { isReadyToSubmit, files, handleSubmit } = useContext(PromptAiContext)
    const backgroundStopElm = getColorStyle(TrilogyColor.BACKGROUND)

    const onClick = useCallback(() => {
      if (statusSubmit === PromptAiSubmitStatus.STREAMING_ON) {
        setStatusSubmit(PromptAiSubmitStatus.STREAMING_OFF)
      } else {
        handleSubmit && handleSubmit()
      }
    }, [statusSubmit, handleSubmit])

    const isActive = useMemo(
      () => statusSubmit === PromptAiSubmitStatus.STREAMING_ON || isReadyToSubmit || !!files.length,
      [statusSubmit, isReadyToSubmit, files.length],
    )

    useEffect(() => {
      setStatusSubmit(status)
    }, [status])

    return (
      <Button
        disabled={!isActive}
        ref={ref}
        iconName={statusSubmit === PromptAiSubmitStatus.STREAMING_OFF ? iconName : undefined}
        variant={ButtonVariant[isActive ? 'PRIMARY' : 'GHOST']}
        onClick={onClick}
        {...others}
      >
        {statusSubmit === PromptAiSubmitStatus.STREAMING_ON && (
          <View style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: backgroundStopElm }} />
        )}
      </Button>
    )
  },
)

PromptAiSubmit.displayName = ComponentName.PromptAiSubmit
export default PromptAiSubmit
