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

/**
 * Button Component
 * @param children {ReactNode} Button label or content
 * @param variant {ButtonVariant} Visual variant: `primary`, `secondary`, `ghost`, or `conversion`; defaults to `primary`
 * @param disabled {boolean} Prevents activation; defaults to `false`
 * @param onClick {(event: GestureResponderEvent) => void} Press handler
 * @param accessibilityLabel {string} Accessible label announced by assistive technology
 * @param testId {string} Test identifier
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {ButtonMarkup} HTML element: `button`, `input`, `a`, or `div`
 * @param loading {boolean} Adds a `loading` class; ignored on Native
 * @param fullwidth {boolean} Adds a `fullwidth` class; ignored on Native
 * @param href {string} Link destination; ignored on Native
 * @param to {string} Router destination; ignored on Native
 * @param name {string} HTML element name; ignored on Native
 * @param routerLink {ElementType} Router link component; ignored on Native
 * @param type {ButtonType} HTML button type; ignored on Native
 * @param id {string} Custom element identifier; ignored on Native
 * @param className {string} Additional CSS classes; ignored on Native
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
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
