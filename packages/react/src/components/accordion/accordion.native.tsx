import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View, type StyleProp, type ViewStyle } from "react-native"

import { useAccordionStyles } from "./accordion.styles.native"
import type { AccordionProps } from "./accordion.types"

export type AccordionNativeRef = ComponentRef<typeof View>

/**
 * Accordion Component
 * @param children {ReactNode} Independently expandable accordion items
 * @param testId {string} Test identifier
 * @param id {string} Element identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Accordion: ForwardRefExoticComponent<
  PropsWithChildren<AccordionProps> & RefAttributes<AccordionNativeRef>
> = forwardRef<AccordionNativeRef, PropsWithChildren<AccordionProps>>(
  ({ children, id, testId, style }, ref) => {
    const styles = useAccordionStyles()
    return (
      <View
        ref={ref}
        nativeID={id}
        testID={testId}
        style={[styles.group.view, style as StyleProp<ViewStyle>]}
      >
        {children}
      </View>
    )
  }
)
Accordion.displayName = "Accordion"
