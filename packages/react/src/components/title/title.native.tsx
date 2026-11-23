import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text } from "react-native"

import { useTitleStyles } from "./title.styles.native"
import { TitleColor, TitleLevel, type TitleProps } from "./title.types"

export type TitleNativeRef = ComponentRef<typeof Text>

export const Title: ForwardRefExoticComponent<
  PropsWithChildren<TitleProps> & RefAttributes<TitleNativeRef>
> = forwardRef<TitleNativeRef, PropsWithChildren<TitleProps>>(
  (
    {
      children,
      level = TitleLevel.one,
      color = TitleColor.primary,
      fontWeight,
      accessibilityLabel,
      id,
      testId,
    },
    ref
  ) => {
    const styles = useTitleStyles()
    const safeLevel = styles.levels[level] ? level : TitleLevel.one

    return (
      <Text
        ref={ref}
        id={id}
        testID={testId}
        nativeID={testId}
        accessibilityRole="header"
        accessibilityLabel={accessibilityLabel}
        style={[
          styles.levels[safeLevel],
          styles.colors[color],
          fontWeight && styles.weights[fontWeight],
        ]}
      >
        {children}
      </Text>
    )
  }
)

Title.displayName = "Title"
