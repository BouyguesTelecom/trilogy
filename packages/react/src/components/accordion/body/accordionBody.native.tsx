import {
  Children,
  forwardRef,
  useMemo,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, View, type StyleProp, type ViewStyle } from "react-native"

import { useAccordionItem } from "../accordionContext"
import { useAccordionBodyStyles } from "./accordionBody.styles.native"
import type { AccordionBodyProps } from "./accordionBody.types"

export type AccordionBodyNativeRef = ComponentRef<typeof View>

/**
 * AccordionBody Component
 * @param children {ReactNode} Expandable content
 * @param testId {string} Test identifier
 * @param id {string} Element identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AccordionBody: ForwardRefExoticComponent<
  PropsWithChildren<AccordionBodyProps> & RefAttributes<AccordionBodyNativeRef>
> = forwardRef<AccordionBodyNativeRef, PropsWithChildren<AccordionBodyProps>>(
  ({ children, id, testId, style }, ref) => {
    const state = useAccordionItem()
    const styles = useAccordionBodyStyles()
    const content = useMemo(
      () =>
        Children.map(children, (child) =>
          typeof child === "string" || typeof child === "number" ? (
            <Text style={styles.body.text}>{child}</Text>
          ) : (
            child
          )
        ),
      [children, styles.body.text]
    )
    return (
      <View
        ref={ref}
        nativeID={id ?? state.bodyId}
        testID={testId}
        accessibilityElementsHidden={!state.open}
        importantForAccessibility={state.open ? "auto" : "no-hide-descendants"}
        style={[
          styles.body.view,
          style as StyleProp<ViewStyle>,
          !state.open && styles.body.hidden,
        ]}
      >
        {content}
      </View>
    )
  }
)
AccordionBody.displayName = "AccordionBody"
