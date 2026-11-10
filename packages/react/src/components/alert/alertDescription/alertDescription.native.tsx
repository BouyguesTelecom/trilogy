import {
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View } from "react-native"

import type { AlertDescriptionProps } from "./alertDescription.types"

export type AlertDescriptionNativeRef = View

export const AlertDescription: ForwardRefExoticComponent<
  PropsWithChildren<AlertDescriptionProps> &
    RefAttributes<AlertDescriptionNativeRef>
> = forwardRef<
  AlertDescriptionNativeRef,
  PropsWithChildren<AlertDescriptionProps>
>(({ children, testId }, ref) => {
  return <View testID={testId}>{children} </View>
})

AlertDescription.displayName = "AlertDescription"
