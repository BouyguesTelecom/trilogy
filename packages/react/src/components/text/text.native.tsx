import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import {
  Text as NativeText,
  type StyleProp,
  type TextStyle,
} from "react-native"

import { useTextStyles } from "./text.styles.native"
import {
  TextColor,
  TextFontWeight,
  TextSize,
  type TextProps,
} from "./text.types"

export type TextNativeRef = ComponentRef<typeof NativeText>

/**
 * Text Component
 * @param children {ReactNode} Text content
 * @param size {TextSize} Font size: `xs`, `sm`, `base`, `md`, `lg`, `xl`, `xxl`, `xxxl`, or `xxxxl`; defaults to `xxxxl`
 * @param color {TextColor} Text color; defaults to `primary`
 * @param fontWeight {TextFontWeight} Font weight: `regular`, `medium`, `semibold`, or `bold`; defaults to `regular`
 * @param accessibilityLabel {string} Accessible label announced by assistive technology
 * @param id {string} Custom native text identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline CSS style on Web or React Native style on Native
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {TextMarkup} HTML element: `h1`–`h6`, `p`, `span`, or `div`; defaults to `p`
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Text: ForwardRefExoticComponent<
  PropsWithChildren<TextProps> & RefAttributes<TextNativeRef>
> = forwardRef<TextNativeRef, PropsWithChildren<TextProps>>(
  (
    {
      children,
      size = TextSize.xxxxl,
      color,
      fontWeight,
      accessibilityLabel,
      id,
      testId,
      style,
    },
    ref
  ) => {
    const styles = useTextStyles()
    const safeSize = styles.sizes[size] ? size : TextSize.xxxxl

    return (
      <NativeText
        ref={ref}
        id={id}
        testID={testId}
        nativeID={testId}
        accessibilityRole="text"
        accessibilityLabel={accessibilityLabel}
        style={[
          styles.sizes[safeSize],
          styles.colors[TextColor.primary],
          styles.weights[TextFontWeight.regular],
          color && styles.colors[color],
          fontWeight && styles.weights[fontWeight],
          style as StyleProp<TextStyle>,
        ]}
      >
        {children}
      </NativeText>
    )
  }
)

Text.displayName = "Text"
