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

import { makeStyle } from "@/hooks/useMakeStyle.native"

import { AlertStatus } from "./alert.types"
import type { AlertProps } from "./alert.types"

export type AlertNativeRef = ComponentRef<typeof View>

export const Alert: ForwardRefExoticComponent<
  PropsWithChildren<AlertProps> & RefAttributes<AlertNativeRef>
> = forwardRef<AlertNativeRef, PropsWithChildren<AlertProps>>(
  ({ children, status = AlertStatus.information, id, testId }, ref) => {
    const styles = useStyles()
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

const useStyles = makeStyle((theme) => ({
  base: {
    container: {
      borderRadius: theme.radius.radiusMd,
      padding: theme.spacings.spacingMd,
      borderWidth: theme.borderWidths.borderWidthSm,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: theme.spacings.spacingSm,
    },
  },
  [AlertStatus.information]: {
    view: {
      backgroundColor: theme.colors.backgroundInformationSubtle,
      borderColor: theme.colors.borderInformation,
    },
    text: {
      color: theme.colors.colorPrimary,
    },
  },
  [AlertStatus.success]: {
    view: {
      backgroundColor: theme.colors.backgroundSuccessSubtle,
      borderColor: theme.colors.borderSuccess,
    },
    text: {
      color: theme.colors.colorPrimary,
    },
  },
  [AlertStatus.error]: {
    view: {
      backgroundColor: theme.colors.backgroundErrorSubtle,
      borderColor: theme.colors.borderError,
    },
    text: {
      color: theme.colors.colorPrimary,
    },
  },
  [AlertStatus.warning]: {
    view: {
      backgroundColor: theme.colors.backgroundWarningSubtle,
      borderColor: theme.colors.borderWarning,
    },
    text: {
      color: theme.colors.colorPrimary,
    },
  },
}))
