import {
  Children,
  forwardRef,
  useMemo,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { DEFAULT_THEME_TRILOGY as theme } from "@trilogy-react/theme"
import {
  StyleSheet,
  Text,
  useColorScheme,
  type GestureResponderEvent,
} from "react-native"

import { Pressable, type PressableRef } from "../pressable/pressable.native"
import { buttonBaseStyles, buttonStyles } from "./button.styles.native"
import type { ButtonProps } from "./button.types"

export type ButtonNativeRef = PressableRef

export const Button: ForwardRefExoticComponent<
  PropsWithChildren<ButtonProps> & RefAttributes<ButtonNativeRef>
> = forwardRef<ButtonNativeRef, PropsWithChildren<ButtonProps>>(
  (
    {
      children,
      variant = "primary",
      disabled = false,
      onClick,
      testId,
      accessibilityLabel,
    },
    ref
  ) => {
    const mode = useColorScheme() === "dark" ? "dark" : "light"

    const generatedStyles = useMemo(
      () => buttonStyles[mode][variant],
      [mode, variant]
    )

    const textStyle = useMemo(
      () => [generatedStyles.text, disabled && generatedStyles.disabledText],
      [generatedStyles.text, generatedStyles.disabledText, disabled]
    )

    const content = useMemo(
      () =>
        Children.map(children, (child) => {
          return typeof child === "string" || typeof child === "number" ? (
            <Text style={textStyle}>{child}</Text>
          ) : (
            child
          )
        }),
      [children, textStyle]
    )

    return (
      <Pressable
        ref={ref}
        testID={testId}
        nativeID={testId}
        accessibilityRole="button"
        accessibilityState={{ disabled }}
        accessible={!!accessibilityLabel}
        accessibilityLabel={accessibilityLabel}
        disabled={disabled}
        onPress={onClick as unknown as (event: GestureResponderEvent) => void}
        style={({ pressed }) => [
          styles.layout,
          buttonBaseStyles.base,
          generatedStyles.view,
          pressed && !disabled && generatedStyles.pressed,
          disabled && generatedStyles.disabled,
        ]}
      >
        {content}
      </Pressable>
    )
  }
)

Button.displayName = "Button"

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacings.spacingSm,
  },
})
