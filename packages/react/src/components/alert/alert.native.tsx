import {
  Children,
  forwardRef,
  useMemo,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, useColorScheme, View } from "react-native"

import { AlertStatus } from "./alert.generated"
import { alertBaseStyles, alertStyles } from "./alert.styles.native"
import type { AlertProps } from "./alert.types"

export type AlertNativeRef = ComponentRef<typeof View>

export const Alert: ForwardRefExoticComponent<
  PropsWithChildren<AlertProps> & RefAttributes<AlertNativeRef>
> = forwardRef<AlertNativeRef, PropsWithChildren<AlertProps>>(
  ({ children, status = AlertStatus.information, id, testId }, ref) => {
    const mode = useColorScheme() === "dark" ? "dark" : "light"

    const generatedStyles = useMemo(
      () => alertStyles[mode][status],
      [mode, status]
    )

    // En natif, un texte brut doit être dans un <Text> ; les composants (AlertContent…) restent tels quels
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
        style={[alertBaseStyles.base, generatedStyles.view]}
      >
        {content}
      </View>
    )
  }
)

Alert.displayName = "Alert"
