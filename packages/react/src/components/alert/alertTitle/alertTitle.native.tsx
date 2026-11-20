import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, TextStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import type { AlertTitleProps } from "./alertTitle.types"

export type AlertTitleNativeRef = ComponentRef<typeof Text>

export const AlertTitle: ForwardRefExoticComponent<
  PropsWithChildren<AlertTitleProps> & RefAttributes<AlertTitleNativeRef>
> = forwardRef<AlertTitleNativeRef, PropsWithChildren<AlertTitleProps>>(
  ({ children, id, testId }, ref) => {
    const styles = useStyles()

    return (
      <Text
        ref={ref}
        id={id}
        testID={testId}
        nativeID={testId}
        style={styles.base.text}
      >
        {children}
      </Text>
    )
  }
)

AlertTitle.displayName = "AlertTitle"

const useStyles = makeStyle((theme) => ({
  base: {
    text: {
      fontFamily: theme.fonts.fontFamilySecondary,
      fontSize: theme.fonts.fontSizeBase,
      fontWeight: String(theme.fonts.fontWeightBold) as TextStyle["fontWeight"],
      color: theme.colors.colorPrimary,
    },
  },
}))
