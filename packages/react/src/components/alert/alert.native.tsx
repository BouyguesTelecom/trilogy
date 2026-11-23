import {
  Children,
  forwardRef,
  useMemo,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, View } from "react-native"

import { useAlertStyles } from "./alert.styles.native"
import { AlertStatus } from "./alert.types"
import type { AlertProps } from "./alert.types"

export type AlertNativeRef = ComponentRef<typeof View>

export const Alert: ForwardRefExoticComponent<
  PropsWithChildren<AlertProps> & RefAttributes<AlertNativeRef>
> = forwardRef<AlertNativeRef, PropsWithChildren<AlertProps>>(
  ({ children, status = AlertStatus.information, id, testId }, ref) => {
    const styles = useAlertStyles()
    const generatedStyles = styles[status]

    const content = useMemo(
      () =>
        Children.map(children, (child) =>
          typeof child === "string" || typeof child === "number" ? (
            <Text style={generatedStyles.text}>{child}</Text>
          ) : (
            child
          )
        ),
      [children, generatedStyles.text]
    )

    return (
      <View
        ref={ref}
        id={id}
        testID={testId}
        nativeID={testId}
        accessibilityRole="alert"
        style={[styles.base.container, generatedStyles.view]}
      >
        {content}
      </View>
    )
  }
)

Alert.displayName = "Alert"
