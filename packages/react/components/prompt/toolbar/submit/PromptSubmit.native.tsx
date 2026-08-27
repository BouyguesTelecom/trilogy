import { ComponentName } from '@/components/enumsComponentsName'
import { Icon, IconName, IconSize } from '@/components/icon'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { PromptContext } from '@/components/prompt/context'
import PromptButton from '@/components/prompt/toolbar/tools/button/PromptButton.native'
import { PromptSubmitNativeRef, PromptSubmitProps, PromptSubmitStatus } from '@/components/prompt/toolbar/submit/PromptSubmitProps'
import { getColorStyle } from "@/helpers/color";
import { TrilogyColor } from "@/interfaces/Color";
import { getRadiusStyle } from "@/helpers/radius";
import { Radius } from "@/interfaces/Radius";

/**
 * PromptSubmit component - Submit button for prompt with streaming support
 * @param status {PromptSubmitStatus} Current status of the submit button (streaming on/off)
 * @param onSubmit {Function} Callback function when submit button is clicked
 * @param onCancelSubmit {Function} Callback function when cancel/stop streaming is clicked
 * @param disabled {boolean} Whether the submit button is disabled
 * @param readOnly {boolean} Whether the submit button is read-only
 */
const PromptSubmit = React.forwardRef<PromptSubmitNativeRef, PromptSubmitProps>(
  ({ status = PromptSubmitStatus.STREAMING_OFF, onSubmit, onCancelSubmit, disabled, readOnly, ...others }, ref) => {
    const [statusSubmit, setStatusSubmit] = useState(status)
    const { text, files, setIsSend, setIsTyping, isDisabled } = useContext(PromptContext)
    const backgroundStopElm = getColorStyle(TrilogyColor.BACKGROUND)
    const isDisable = isDisabled || disabled
    const borderSmallerRadius = getRadiusStyle(Radius.SMALLER)

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
        disabled={disabled}
        readOnly={readOnly}
        active={isActive}
        ref={ref}
        {...{ isSubmit: true, isActive }}
        {...others}
      >
        {statusSubmit === PromptSubmitStatus.STREAMING_ON ? (
          <View
            style={{ height: 20, width: 20, borderRadius: borderSmallerRadius, backgroundColor: backgroundStopElm }}
          />
        ) : (
          <Icon
            size={IconSize.SMALLER}
            color={TrilogyColor[isDisable ? 'DISABLED_FADE' : !isActive ? 'DISABLED' : 'BACKGROUND']}
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
