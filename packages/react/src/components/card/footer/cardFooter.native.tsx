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
import { useCardFooterStyles } from "./cardFooter.styles.native"
import type { CardFooterProps } from "./cardFooter.types"

export type CardFooterNativeRef = ComponentRef<typeof View>
/** CardFooter Component.
 * @param children {ReactNode} Footer content
 * @param background {BackgroundColors} Optional semantic background; the top border takes the same color
 * @param padding {CardFooterPadding} Padding token (`xxxl` to `none`); omitted keeps `md`
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardFooter: ForwardRefExoticComponent<
  PropsWithChildren<CardFooterProps> & RefAttributes<CardFooterNativeRef>
> = forwardRef<CardFooterNativeRef, PropsWithChildren<CardFooterProps>>(
  ({ children, background, padding, id, testId, style }, ref) => {
    const styles = useCardFooterStyles()
    const color = useCardBackground(background)
    return (
      <View
        ref={ref}
        nativeID={id}
        testID={testId}
        style={[
          styles.base.view,
          padding && styles.padding[padding],
          color && { backgroundColor: color, borderTopColor: color },
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
CardFooter.displayName = "CardFooter"
