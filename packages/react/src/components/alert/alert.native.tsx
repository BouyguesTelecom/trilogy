import {
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, View } from "react-native"

import type { AlertProps } from "./alert.types"

export type AlertNativeRef = View

export const Alert: ForwardRefExoticComponent<
  PropsWithChildren<AlertProps> & RefAttributes<AlertNativeRef>
> = forwardRef<AlertNativeRef, PropsWithChildren<AlertProps>>(
  ({ children, testId }, ref) => {
    return <View testID={testId}></View>
  }
)

Alert.displayName = "Alert"
