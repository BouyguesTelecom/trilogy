import {
  Children,
  forwardRef,
  useMemo,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import {
  Pressable,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native"

import { useAccordionItem } from "../accordionContext"
import { useAccordionHeaderStyles } from "./accordionHeader.styles.native"
import type { AccordionHeaderProps } from "./accordionHeader.types"

export type AccordionHeaderNativeRef = ComponentRef<typeof Pressable>

/**
 * AccordionHeader Component
 * @param children {ReactNode} Header content
 * @param expandIcon {ReactNode} Optional decorative icon rotated when open
 * @param accessibilityLabel {string} Accessible toggle name
 * @param testId {string} Test identifier
 * @param id {string} Toggle identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AccordionHeader: ForwardRefExoticComponent<
  PropsWithChildren<AccordionHeaderProps> &
    RefAttributes<AccordionHeaderNativeRef>
> = forwardRef<
  AccordionHeaderNativeRef,
  PropsWithChildren<AccordionHeaderProps>
>(({ children, expandIcon, id, testId, style, accessibilityLabel }, ref) => {
  const state = useAccordionItem()
  const styles = useAccordionHeaderStyles()
  const content = useMemo(
    () =>
      Children.map(children, (child) =>
        typeof child === "string" || typeof child === "number" ? (
          <Text
            style={[
              styles.header.text,
              state.disabled && styles.header.disabledText,
            ]}
          >
            {child}
          </Text>
        ) : (
          child
        )
      ),
    [children, styles.header.text, state.disabled, styles.header.disabledText]
  )
  return (
    <Pressable
      ref={ref}
      nativeID={id ?? state.headerId}
      testID={testId}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ expanded: state.open, disabled: state.disabled }}
      disabled={state.disabled}
      onPress={state.toggle}
      style={[styles.header.view, style as StyleProp<ViewStyle>]}
    >
      {content}
      {expandIcon != null && (
        <View
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={[styles.icon.view, state.open && styles.icon.open]}
        >
          {expandIcon}
        </View>
      )}
    </Pressable>
  )
})
AccordionHeader.displayName = "AccordionHeader"
