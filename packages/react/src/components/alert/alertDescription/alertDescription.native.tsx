import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, TextStyle } from "react-native"

import { makeStyle } from "@/hooks/useMakeStyle.native"

import type { AlertDescriptionProps } from "./alertDescription.types"

export type AlertDescriptionNativeRef = ComponentRef<typeof Text>

export const AlertDescription: ForwardRefExoticComponent<
  PropsWithChildren<AlertDescriptionProps> &
    RefAttributes<AlertDescriptionNativeRef>
> = forwardRef<
  AlertDescriptionNativeRef,
  PropsWithChildren<AlertDescriptionProps>
>(({ children, id, testId }, ref) => {
  const styles = useStyles()

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

const useStyles = makeStyle((theme) => ({
  base: {
    text: {
      fontFamily: theme.fonts.fontFamilyPrimary,
      fontSize: theme.fonts.fontSizeSm,
      fontWeight: String(
        theme.fonts.fontWeightRegular
      ) as TextStyle["fontWeight"],
      color: theme.colors.colorPrimary,
    },
  },
}))
