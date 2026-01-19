import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconName } from '@/components/icon'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PromptAiContext } from '../../context'
import PromptAiButton from '../tools/button/PromptAiButton.native'
import { PromptAiSubmitNativeRef, PromptAiSubmitProps, PromptAiSubmitStatus } from './PromptAiSubmitProps'

const PromptAiSubmit = React.forwardRef<PromptAiSubmitNativeRef, PromptAiSubmitProps>(
  ({ status = PromptAiSubmitStatus.STREAMING_OFF, onSubmit, onCancelSubmit, ...others }, ref) => {
    const [statusSubmit, setStatusSubmit] = useState(status)
    const { text, files, setIsSend } = useContext(PromptAiContext)
    const backgroundStopElm = getColorStyle(TrilogyColor.BACKGROUND)

    const onClick = useCallback(() => {
      if (statusSubmit === PromptAiSubmitStatus.STREAMING_ON) {
        setStatusSubmit(PromptAiSubmitStatus.STREAMING_OFF)
        onCancelSubmit?.()
      } else {
        onSubmit && onSubmit()
        setIsSend(true)
      }
    }, [statusSubmit, onSubmit])

    const isActive = useMemo(
      () => statusSubmit === PromptAiSubmitStatus.STREAMING_ON || !!text.trim().length || !!files,
      [statusSubmit, text, files],
    )

    const styles = StyleSheet.create({
      icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 36,
      },
    })

    useEffect(() => {
      setStatusSubmit(status)
    }, [status])

    return (
      <PromptAiButton onClick={onClick} disabled={!isActive} active={isActive} ref={ref} {...others}>
        {statusSubmit === PromptAiSubmitStatus.STREAMING_ON ? (
          <View style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: backgroundStopElm }} />
        ) : (
          <Icon
            color={IconColor[isActive ? 'WHITE' : 'NEUTRAL']}
            name={IconName.ARROW_UP}
            {...{
              style: styles.icon,
            }}
          />
        )}
      </PromptAiButton>
    )
  },
)

PromptAiSubmit.displayName = ComponentName.PromptAiSubmit
export default PromptAiSubmit
