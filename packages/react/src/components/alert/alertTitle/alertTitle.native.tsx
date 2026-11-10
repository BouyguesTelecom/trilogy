import {
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View } from "react-native"

import type { AlertTitleProps } from "./alertTitle.types"

export type AlertTitleNativeRef = View

export const AlertTitle: ForwardRefExoticComponent<
  PropsWithChildren<AlertTitleProps> & RefAttributes<AlertTitleNativeRef>
> = forwardRef<AlertTitleNativeRef, PropsWithChildren<AlertTitleProps>>(
  ({ children, testId }, ref) => {
    return <View testID={testId}></View>
  }
)

AlertTitle.displayName = "AlertTitle"
