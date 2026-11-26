import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { View, type StyleProp, type ViewStyle } from "react-native"

import { useCardStyles } from "./card.styles.native"
import type { CardProps } from "./card.types"
import { CardOrientationProvider } from "./cardOrientation.native"

export type CardNativeRef = ComponentRef<typeof View>
/** Card Component.
 * @param children {ReactNode} Card sections: CardHeader, CardImage and CardContent
 * @param appearance {CardAppearance} Surface treatment: `shadow`, `outlined` or `accent-start`; omitted adds none
 * @param orientation {CardOrientation} Layout direction: `vertical` or `horizontal`; defaults to vertical
 * @param borderRadius {CardBorderRadius} Corner radius token (`full`, `lg`, `md`, `sm`, `xs`, `none`); omitted keeps `lg`
 * @param padding {CardPadding} Padding spacing token (`xxxl` to `none`); omitted adds none
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Card: ForwardRefExoticComponent<
  PropsWithChildren<CardProps> & RefAttributes<CardNativeRef>
> = forwardRef<CardNativeRef, PropsWithChildren<CardProps>>(
  (
    {
      children,
      appearance,
      orientation = "vertical",
      borderRadius,
      padding,
      id,
      testId,
      style,
    },
    ref
  ) => {
    const styles = useCardStyles()
    return (
      <View
        ref={ref}
        nativeID={id}
        testID={testId}
        style={[
          styles.base.view,
          styles.orientation[orientation],
          appearance && styles.appearance[appearance],
          borderRadius && styles.borderRadius[borderRadius],
          padding && styles.padding[padding],
          style as StyleProp<ViewStyle>,
        ]}
      >
        <CardOrientationProvider value={orientation}>
          {children}
        </CardOrientationProvider>
      </View>
    )
  }
)
Card.displayName = "Card"
