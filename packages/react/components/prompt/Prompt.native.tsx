import { getColorStyle, TrilogyColor } from '@/objects/facets/Color'
import { useContext, forwardRef } from 'react'
import { View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { ComponentName } from '@/components/enumsComponentsName'
import { PromptNativeRef, PromptProps } from '@/components/prompt/PromptProps'
import { PromptContext, PromptProvider } from '@/components/prompt/context'
import { Theme } from '@/constants/theme'

const PromptElm = forwardRef<PromptNativeRef, PromptProps>(({ disabled, ...others }, ref) => {
  const { isFocused, isDisabled } = useContext(PromptContext)

  const styles = memoStyles({
    view: {
      borderWidth: isFocused ? 2 : 1,
      borderRadius: Theme.radius.sm,
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
const Prompt = forwardRef<PromptNativeRef, PromptProps>(
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
