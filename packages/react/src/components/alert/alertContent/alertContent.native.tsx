import {
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View } from "react-native"

import type { AlertContentProps } from "./alertContent.types"

export type AlertContentNativeRef = View

export const AlertContent: ForwardRefExoticComponent<
  PropsWithChildren<AlertContentProps> & RefAttributes<AlertContentNativeRef>
> = forwardRef<AlertContentNativeRef, PropsWithChildren<AlertContentProps>>(
  ({ children, testId }, ref) => {
    return <View testID={testId}>{children} </View>
  }
)

AlertContent.displayName = "AlertContent"
