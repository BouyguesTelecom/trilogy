import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text } from "react-native"

import { useAlertTitleStyles } from "./alertTitle.styles.native"
import type { AlertTitleProps } from "./alertTitle.types"

export type AlertTitleNativeRef = ComponentRef<typeof Text>

export const AlertTitle: ForwardRefExoticComponent<
  PropsWithChildren<AlertTitleProps> & RefAttributes<AlertTitleNativeRef>
> = forwardRef<AlertTitleNativeRef, PropsWithChildren<AlertTitleProps>>(
  ({ children, id, testId }, ref) => {
    const styles = useAlertTitleStyles()

    return (
      <Text
        ref={ref}
        id={id}
        testID={testId}
        nativeID={testId}
        style={styles.base.text}
      >
        {children}
      </Text>
    )
  }
)

AlertTitle.displayName = "AlertTitle"
