import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text } from "react-native"

import { useAlertDescriptionStyles } from "./alertDescription.styles.native"
import type { AlertDescriptionProps } from "./alertDescription.types"

export type AlertDescriptionNativeRef = ComponentRef<typeof Text>

export const AlertDescription: ForwardRefExoticComponent<
  PropsWithChildren<AlertDescriptionProps> &
    RefAttributes<AlertDescriptionNativeRef>
> = forwardRef<
  AlertDescriptionNativeRef,
  PropsWithChildren<AlertDescriptionProps>
>(({ children, id, testId }, ref) => {
  const styles = useAlertDescriptionStyles()

  return (
    <Text
      ref={ref}
      id={id}
      testID={testId}
      nativeID={testId}
      style={[styles.base.text]}
    >
      {children}
    </Text>
  )
})

AlertDescription.displayName = "AlertDescription"
