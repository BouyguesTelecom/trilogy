import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconColor, IconName } from '@/components/icon'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PromptContext } from '../../context'
import PromptButton from '../tools/button/PromptButton.native'
import { PromptSubmitNativeRef, PromptSubmitProps, PromptSubmitStatus } from './PromptSubmitProps'

const PromptSubmit = React.forwardRef<PromptSubmitNativeRef, PromptSubmitProps>(
  ({ status = PromptSubmitStatus.STREAMING_OFF, onSubmit, onCancelSubmit, ...others }, ref) => {
    const [statusSubmit, setStatusSubmit] = useState(status)
    const { text, files, setIsSend } = useContext(PromptContext)
    const backgroundStopElm = getColorStyle(TrilogyColor.BACKGROUND)

    const onClick = useCallback(() => {
      if (statusSubmit === PromptSubmitStatus.STREAMING_ON) {
        setStatusSubmit(PromptSubmitStatus.STREAMING_OFF)
        onCancelSubmit?.()
      } else {
        onSubmit && onSubmit()
        setIsSend(true)
      }
    }, [statusSubmit, onSubmit])

    const isActive = useMemo(
      () => statusSubmit === PromptSubmitStatus.STREAMING_ON || !!text.trim().length || !!files,
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
      <PromptButton onClick={onClick} disabled={!isActive} active={isActive} ref={ref} {...others}>
        {statusSubmit === PromptSubmitStatus.STREAMING_ON ? (
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
      </PromptButton>
    )
  },
)

PromptSubmit.displayName = ComponentName.PromptSubmit
export default PromptSubmit
