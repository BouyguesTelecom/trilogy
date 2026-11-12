import {
  ComponentRef,
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { StyleSheet, View } from "react-native"

import { alertContentStyles } from "./alertContent.styles.native"
import type { AlertContentProps } from "./alertContent.types"

export type AlertContentNativeRef = ComponentRef<typeof View>

export const AlertContent: ForwardRefExoticComponent<
  PropsWithChildren<AlertContentProps> & RefAttributes<AlertContentNativeRef>
> = forwardRef<AlertContentNativeRef, PropsWithChildren<AlertContentProps>>(
  ({ children, testId }, ref) => {
    return (
      <View
        ref={ref}
        testID={testId}
        style={[alertContentStyles.view, styles.shrink]}
      >
        {children}
      </View>
    )
  }
)

AlertContent.displayName = "AlertContent"

const styles = StyleSheet.create({
  shrink: { flexShrink: 1 },
})
