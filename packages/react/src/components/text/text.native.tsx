import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text as NativeText } from "react-native"

import { useTextStyles } from "./text.styles.native"
import {
  TextColor,
  TextFontWeight,
  TextSize,
  type TextProps,
} from "./text.types"

export type TextNativeRef = ComponentRef<typeof NativeText>

export const Text: ForwardRefExoticComponent<
  PropsWithChildren<TextProps> & RefAttributes<TextNativeRef>
> = forwardRef<TextNativeRef, PropsWithChildren<TextProps>>(
  (
    {
      children,
      size = TextSize.xxxxl,
      color,
      fontSize,
      fontWeight,
      accessibilityLabel,
      id,
      testId,
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
          fontSize &&
            styles.sizes[fontSize] && {
              fontSize: styles.sizes[fontSize].fontSize,
            },
          color && styles.colors[color],
          fontWeight && styles.weights[fontWeight],
        ]}
      >
        {children}
      </NativeText>
    )
  }
)

Text.displayName = "Text"
