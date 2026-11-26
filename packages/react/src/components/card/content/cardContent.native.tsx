import {
  Children,
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, View, type StyleProp, type ViewStyle } from "react-native"

import type { CardSectionProps } from "../card.types"
import { useCardBackground } from "../cardBackground.native"
import { useCardContentStyles } from "./cardContent.styles.native"

export type CardContentNativeRef = ComponentRef<typeof View>
/** CardContent Component.
 * @param children {ReactNode} Card content
 * @param background {BackgroundColors} Optional semantic background
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardContent: ForwardRefExoticComponent<
  PropsWithChildren<CardSectionProps> & RefAttributes<CardContentNativeRef>
> = forwardRef<CardContentNativeRef, PropsWithChildren<CardSectionProps>>(
  ({ children, background, id, testId, style }, ref) => {
    const styles = useCardContentStyles()
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
CardContent.displayName = "CardContent"
