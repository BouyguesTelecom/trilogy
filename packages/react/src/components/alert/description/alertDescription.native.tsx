import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text } from "react-native"

import { useAlertDescriptionStyles } from "./alertDescription.styles.native"
import type { AlertDescriptionProps } from "./alertDescription.types"

export type AlertDescriptionNativeRef = ComponentRef<typeof Text>

/**
 * AlertDescription Component
 * @param children {ReactNode} Alert description content
 * @param id {string} Custom native text identifier
 * @param testId {string} Test identifier
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {AlertDescriptionMarkup} HTML element: `p`, `span`, `div`, `h2`, `h3`, `h4`, `h5`, or `h6`; defaults to `p`
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AlertDescription: ForwardRefExoticComponent<
  PropsWithChildren<AlertDescriptionProps> &
    RefAttributes<AlertDescriptionNativeRef>
> = forwardRef<
  AlertDescriptionNativeRef,
  PropsWithChildren<AlertDescriptionProps>
>(({ children, id, testId }, ref) => {
  const styles = useAlertDescriptionStyles()

  return (
    <Text
      ref={ref}
      id={id}
      testID={testId}
      nativeID={testId}
      style={[styles.base.text]}
    >
      {children}
    </Text>
  )
})

AlertDescription.displayName = "AlertDescription"
