import {
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import {
  Pressable,
  Text,
  type GestureResponderEvent,
  type View,
} from "react-native"

import type { ButtonProps } from "./button.types"

export type ButtonNativeRef = View

export const Button: ForwardRefExoticComponent<
  PropsWithChildren<ButtonProps> & RefAttributes<ButtonNativeRef>
> = forwardRef<ButtonNativeRef, PropsWithChildren<ButtonProps>>(
  ({ children, disabled = false, onClick, testId }, ref) => {
    return (
      <Pressable
        ref={ref as any}
        testID={testId}
        disabled={disabled}
        onPress={onClick as unknown as (event: GestureResponderEvent) => void}
      >
        {typeof children === "string" ? <Text>{children}</Text> : children}
      </Pressable>
    )
  }
)

Button.displayName = "Button"
