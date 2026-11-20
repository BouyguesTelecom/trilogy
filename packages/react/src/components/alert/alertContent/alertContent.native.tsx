import {
  ComponentRef,
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { StyleSheet, View } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import type { AlertContentProps } from "./alertContent.types"

export type AlertContentNativeRef = ComponentRef<typeof View>

export const AlertContent: ForwardRefExoticComponent<
  PropsWithChildren<AlertContentProps> & RefAttributes<AlertContentNativeRef>
> = forwardRef<AlertContentNativeRef, PropsWithChildren<AlertContentProps>>(
  ({ children, testId }, ref) => {
    const styles = useStyles()

    return (
      <View
        ref={ref}
        testID={testId}
        style={[styles.base.view, stylesStatic.view]}
      >
        {children}
      </View>
    )
  }
)

AlertContent.displayName = "AlertContent"

const stylesStatic = StyleSheet.create({
  view: {
    flexShrink: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
})

const useStyles = makeStyle((theme) => ({
  base: {
    view: {
      gap: theme.spacings.spacingXs,
    },
  },
}))
