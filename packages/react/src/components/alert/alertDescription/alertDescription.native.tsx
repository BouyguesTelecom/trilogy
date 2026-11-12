import {
  forwardRef,
  useMemo,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, useColorScheme } from "react-native"

import { alertDescriptionStyles } from "./alertDescription.styles.native"
import type { AlertDescriptionProps } from "./alertDescription.types"

export type AlertDescriptionNativeRef = ComponentRef<typeof Text>

export const AlertDescription: ForwardRefExoticComponent<
  PropsWithChildren<AlertDescriptionProps> &
    RefAttributes<AlertDescriptionNativeRef>
> = forwardRef<
  AlertDescriptionNativeRef,
  PropsWithChildren<AlertDescriptionProps>
>(({ children, id, testId }, ref) => {
  const mode = useColorScheme() === "dark" ? "dark" : "light"

  const generatedStyles = useMemo(() => alertDescriptionStyles[mode], [mode])

  return (
    <Text
      ref={ref}
      id={id}
      testID={testId}
      nativeID={testId}
      style={[generatedStyles.text]}
    >
      {children}
    </Text>
  )
})

AlertDescription.displayName = "AlertDescription"
