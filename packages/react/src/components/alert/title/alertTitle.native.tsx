import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, type StyleProp, type TextStyle } from "react-native"

import { useAlertTitleStyles } from "./alertTitle.styles.native"
import type { AlertTitleProps } from "./alertTitle.types"

export type AlertTitleNativeRef = ComponentRef<typeof Text>

/**
 * AlertTitle Component
 * @param children {ReactNode} Alert title content
 * @param id {string} Custom native text identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline CSS style on Web or React Native style on Native
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {AlertTitleMarkup} HTML element: `p`, `h2`, `h3`, `h4`, `h5`, or `h6`; defaults to `p`
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AlertTitle: ForwardRefExoticComponent<
  PropsWithChildren<AlertTitleProps> & RefAttributes<AlertTitleNativeRef>
> = forwardRef<AlertTitleNativeRef, PropsWithChildren<AlertTitleProps>>(
  ({ children, id, testId, style }, ref) => {
    const styles = useAlertTitleStyles()

    return (
      <Text
        ref={ref}
        id={id}
        testID={testId}
        nativeID={testId}
        style={[styles.base.text, style as StyleProp<TextStyle>]}
      >
        {children}
      </Text>
    )
  }
)

AlertTitle.displayName = "AlertTitle"
