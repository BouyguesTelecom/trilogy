import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text as NativeText } from "react-native"

import { useTextStyles } from "./text.styles.native"
import { TextColor, TextLevel, type TextProps } from "./text.types"

export type TextNativeRef = ComponentRef<typeof NativeText>

export const Text: ForwardRefExoticComponent<
  PropsWithChildren<TextProps> & RefAttributes<TextNativeRef>
> = forwardRef<TextNativeRef, PropsWithChildren<TextProps>>(
  (
    {
      children,
      level = TextLevel.one,
      color = TextColor.primary,
      fontWeight,
      accessibilityLabel,
      id,
      testId,
    },
    ref
  ) => {
    const styles = useTextStyles()
    const safeLevel = styles.levels[level] ? level : TextLevel.one

    return (
      <NativeText
        ref={ref}
        id={id}
        testID={testId}
        nativeID={testId}
        accessibilityRole="text"
        accessibilityLabel={accessibilityLabel}
        style={[
          styles.levels[safeLevel],
          styles.colors[color],
          fontWeight && styles.weights[fontWeight],
        ]}
      >
        {children}
      </NativeText>
    )
  }
)

Text.displayName = "Text"
