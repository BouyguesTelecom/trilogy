import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PromptContext } from '../../context'
import PromptButton from '../tools/button/PromptButton.native'
import { PromptSubmitNativeRef, PromptSubmitProps, PromptSubmitStatus } from './PromptSubmitProps'

const PromptSubmit = React.forwardRef<PromptSubmitNativeRef, PromptSubmitProps>(
  ({ status = PromptSubmitStatus.STREAMING_OFF, onSubmit, onCancelSubmit, disabled, readOnly, ...others }, ref) => {
    const [statusSubmit, setStatusSubmit] = useState(status)
    const { text, files, setIsSend, setIsTyping, isDisabled } = useContext(PromptContext)
    const backgroundStopElm = getColorStyle(TrilogyColor.BACKGROUND)
    const isDisable = isDisabled || disabled

    const onClick = useCallback(() => {
      setIsTyping(false)
      if (statusSubmit === PromptSubmitStatus.STREAMING_ON) {
        setStatusSubmit(PromptSubmitStatus.STREAMING_OFF)
        onCancelSubmit?.()
      } else {
        onSubmit && onSubmit()
        setIsSend(true)
      }
    }, [statusSubmit, onSubmit, setIsTyping])

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
      <PromptButton
        onClick={onClick}
        disabled={disabled || !isActive}
        readOnly={readOnly}
        active={isActive}
        ref={ref}
        {...others}
      >
        {statusSubmit === PromptSubmitStatus.STREAMING_ON ? (
          <View style={{ height: 20, width: 20, borderRadius: 4, backgroundColor: backgroundStopElm }} />
        ) : (
          <Icon
            size={IconSize.SMALLER}
            color={TrilogyColor[isDisable || !isActive ? 'DISABLED' : 'BACKGROUND']}
            name={IconName.ARROW_HIGH}
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
