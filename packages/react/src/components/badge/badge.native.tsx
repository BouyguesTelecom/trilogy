import {
  Children,
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { getBackgroundThemeKey } from "@/utils/getBackgroundThemeKey"
import { getTextColorFromBackground } from "@/utils/getTextColorFromBackground"
import { Text, View, type StyleProp, type ViewStyle } from "react-native"

import { useTrilogyContext } from "@/hooks/useTrilogyContext.native"

import { useBadgeAnchorPosition } from "./anchor/badgeAnchorPosition.native"
import { useBadgeStyles } from "./badge.styles.native"
import { BadgeSize, type BadgeProps } from "./badge.types"

export type BadgeNativeRef = ComponentRef<typeof View>
/** Badge Component.
 * @param children {ReactNode} Short content: a count, a word or an icon; never wraps
 * @param size {BadgeSize} Fixed size: `default` (24px high) or `small` (16px high); defaults to `default`
 * @param background {BackgroundColors} Semantic background color; defaults to `secondary`; the text is the default color on a light background, white otherwise
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Badge: ForwardRefExoticComponent<
  PropsWithChildren<BadgeProps> & RefAttributes<BadgeNativeRef>
> = forwardRef<BadgeNativeRef, PropsWithChildren<BadgeProps>>(
  (
    {
      children,
      size = BadgeSize.default,
      background = "secondary",
      id,
      testId,
      style,
    },
    ref
  ) => {
    const styles = useBadgeStyles()
    const position = useBadgeAnchorPosition()
    const { colors, mode } = useTrilogyContext()
    const backgroundColor = colors[mode][getBackgroundThemeKey(background)]
    const textColor = getTextColorFromBackground(backgroundColor)
    return (
      <View
        ref={ref}
        nativeID={id}
        testID={testId}
        style={[
          styles.base.view,
          styles.sizeView[size],
          { backgroundColor },
          position && styles.anchored[position],
          style as StyleProp<ViewStyle>,
        ]}
      >
        {Children.map(children, (child) =>
          typeof child === "string" || typeof child === "number" ? (
            <Text
              numberOfLines={1}
              style={[
                styles.base.text,
                styles.sizeText[size],
                styles.textColor[textColor],
              ]}
            >
              {child}
            </Text>
          ) : (
            child
          )
        )}
      </View>
    )
  }
)
Badge.displayName = "Badge"
