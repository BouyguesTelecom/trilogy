import {
  forwardRef,
  useMemo,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, useColorScheme } from "react-native"

import { alertTitleStyles } from "./alertTitle.styles.native"
import type { AlertTitleProps } from "./alertTitle.types"

export type AlertTitleNativeRef = ComponentRef<typeof Text>

export const AlertTitle: ForwardRefExoticComponent<
  PropsWithChildren<AlertTitleProps> & RefAttributes<AlertTitleNativeRef>
> = forwardRef<AlertTitleNativeRef, PropsWithChildren<AlertTitleProps>>(
  ({ children, id, testId }, ref) => {
    const mode = useColorScheme() === "dark" ? "dark" : "light"

    const generatedStyles = useMemo(() => alertTitleStyles[mode], [mode])

    return (
      <Text
        ref={ref}
        id={id}
        testID={testId}
        nativeID={testId}
        style={generatedStyles.text}
      >
        {children}
      </Text>
    )
  }
)

AlertTitle.displayName = "AlertTitle"
