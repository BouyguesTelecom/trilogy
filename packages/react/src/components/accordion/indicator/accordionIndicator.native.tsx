import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View, type StyleProp, type ViewStyle } from "react-native"

import { useAccordionItem } from "../accordionContext"
import { useAccordionIndicatorStyles } from "./accordionIndicator.styles.native"
import type { AccordionIndicatorProps } from "./accordionIndicator.types"

export type AccordionIndicatorNativeRef = ComponentRef<typeof View>

/**
 * AccordionIndicator Component
 * @param children {ReactNode} Caller-provided decorative icon
 * @param testId {string} Test identifier
 * @param id {string} Element identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AccordionIndicator: ForwardRefExoticComponent<
  PropsWithChildren<AccordionIndicatorProps> &
    RefAttributes<AccordionIndicatorNativeRef>
> = forwardRef<
  AccordionIndicatorNativeRef,
  PropsWithChildren<AccordionIndicatorProps>
>(({ children, id, testId, style }, ref) => {
  const state = useAccordionItem()
  const styles = useAccordionIndicatorStyles()
  return (
    <View
      ref={ref}
      nativeID={id}
      testID={testId}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[
        styles.indicator.view,
        state.open && styles.indicator.open,
        style as StyleProp<ViewStyle>,
      ]}
    >
      {children}
    </View>
  )
})
AccordionIndicator.displayName = "AccordionIndicator"
