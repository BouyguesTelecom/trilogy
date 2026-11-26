import {
  Children,
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, View, type StyleProp, type ViewStyle } from "react-native"

import { useCardBackground } from "../cardBackground.native"
import { useCardHeaderStyles } from "./cardHeader.styles.native"
import type { CardHeaderProps } from "./cardHeader.types"

export type CardHeaderNativeRef = ComponentRef<typeof View>
/** CardHeader Component.
 * @param children {ReactNode} Header content
 * @param background {BackgroundColors} Optional semantic background
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardHeader: ForwardRefExoticComponent<
  PropsWithChildren<CardHeaderProps> & RefAttributes<CardHeaderNativeRef>
> = forwardRef<CardHeaderNativeRef, PropsWithChildren<CardHeaderProps>>(
  ({ children, background, id, testId, style }, ref) => {
    const styles = useCardHeaderStyles()
    const color = useCardBackground(background)
    return (
      <View
        ref={ref}
        nativeID={id}
        testID={testId}
        style={[
          styles.base.view,
          color && { backgroundColor: color },
          style as StyleProp<ViewStyle>,
        ]}
      >
        {Children.map(children, (child) =>
          typeof child === "string" || typeof child === "number" ? (
            <Text style={styles.base.text}>{child}</Text>
          ) : (
            child
          )
        )}
      </View>
    )
  }
)
CardHeader.displayName = "CardHeader"
