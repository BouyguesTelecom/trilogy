import {
  Children,
  forwardRef,
  useMemo,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, type GestureResponderEvent } from "react-native"

import {
  Pressable,
  type PressableRef,
} from "@/components/pressable/pressable.native"

import { useButtonStyles } from "./button.styles.native"
import { ButtonVariant, type ButtonProps } from "./button.types"

export type ButtonNativeRef = PressableRef

export const Button: ForwardRefExoticComponent<
  PropsWithChildren<ButtonProps> & RefAttributes<ButtonNativeRef>
> = forwardRef<ButtonNativeRef, PropsWithChildren<ButtonProps>>(
  (
    {
      children,
      variant = ButtonVariant.primary,
      disabled = false,
      onClick,
      testId,
      accessibilityLabel,
    },
    ref
  ) => {
    const styles = useButtonStyles()
    const generatedStyles = styles[variant]

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
          styles.base.layout,
          styles.base.button,
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
