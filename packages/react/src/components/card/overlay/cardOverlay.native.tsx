import {
  Children,
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { Text, View, type StyleProp, type ViewStyle } from "react-native"

import type { CardOverlayProps } from "../card.types"
import { useCardOverlayStyles } from "./cardOverlay.styles.native"

export type CardOverlayNativeRef = ComponentRef<typeof View>
/** CardOverlay Component.
 * @param children {ReactNode} Overlay content
 * @param align {CardOverlayAlign} Alignment; defaults to center
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardOverlay: ForwardRefExoticComponent<
  PropsWithChildren<CardOverlayProps> & RefAttributes<CardOverlayNativeRef>
> = forwardRef<CardOverlayNativeRef, PropsWithChildren<CardOverlayProps>>(
  ({ children, align = "center", id, testId, style }, ref) => {
    const styles = useCardOverlayStyles()
    return (
      <View
        ref={ref}
        nativeID={id}
        testID={testId}
        pointerEvents="box-none"
        style={[
          styles.base.view,
          styles.align[align],
          style as StyleProp<ViewStyle>,
        ]}
      >
        {Children.map(children, (child) =>
          typeof child === "string" || typeof child === "number" ? (
            <Text>{child}</Text>
          ) : (
            child
          )
        )}
      </View>
    )
  }
)
CardOverlay.displayName = "CardOverlay"
