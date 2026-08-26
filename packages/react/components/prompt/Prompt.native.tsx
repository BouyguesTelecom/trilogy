import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ComponentName } from '@/components/enumsComponentsName'
import { PromptNativeRef, PromptProps } from '@/components/prompt/PromptProps'
import { PromptContext, PromptProvider } from '@/components/prompt/context/index'
import { getColorStyle } from "@/helpers/color";
import { TrilogyColor } from "@/interfaces/Color";
import { getRadiusStyle } from "@/helpers/radius";
import { Radius } from "@/interfaces/Radius";

const PromptElm = React.forwardRef<PromptNativeRef, PromptProps>(({ disabled, ...others }, ref) => {
  const { isFocused, isDisabled } = useContext(PromptContext)

  const styles = StyleSheet.create({
    view: {
      borderWidth: isFocused ? 2 : 1,
      borderRadius: getRadiusStyle(Radius.SMALL),
      borderColor: getColorStyle(TrilogyColor[isFocused ? 'MAIN' : isDisabled ? 'DISABLED' : 'STROKE']),
      margin: isFocused ? -1 : undefined,
      backgroundColor: getColorStyle(disabled ? TrilogyColor.DISABLED_FADE : TrilogyColor.BACKGROUND),
    },
  })
  return <View ref={ref} style={styles.view} {...others} />
})

/**
 * Prompt Component (React Native) - Form wrapper for chat-like or AI prompt interfaces
 * @param readOnly {boolean} Read-only state (disables editing)
 * @param disabled {boolean} Disabled state
 * @param children {ReactNode} Child components (Input, Textarea, toolbar buttons, etc.)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 */
const Prompt = React.forwardRef<PromptNativeRef, PromptProps>(
  ({ disabled = false, readOnly = false, ...others }, ref) => {
    return (
      <PromptProvider isDisabled={disabled} isReadonly={readOnly}>
        <PromptElm ref={ref} disabled={disabled} {...others} />
      </PromptProvider>
    )
  },
)

Prompt.displayName = ComponentName.Prompt
export default Prompt
