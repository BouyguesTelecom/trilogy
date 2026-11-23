import {
  ComponentRef,
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View } from "react-native"

import { useAlertContentStyles } from "./alertContent.styles.native"
import type { AlertContentProps } from "./alertContent.types"

export type AlertContentNativeRef = ComponentRef<typeof View>

export const AlertContent: ForwardRefExoticComponent<
  PropsWithChildren<AlertContentProps> & RefAttributes<AlertContentNativeRef>
> = forwardRef<AlertContentNativeRef, PropsWithChildren<AlertContentProps>>(
  ({ children, testId }, ref) => {
    const styles = useAlertContentStyles()

    return (
      <View ref={ref} testID={testId} style={[styles.base.view]}>
        {children}
      </View>
    )
  }
)

AlertContent.displayName = "AlertContent"
