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

import { useStickerStyles } from "./sticker.styles.native"
import { StickerSize, type StickerProps } from "./sticker.types"

export type StickerNativeRef = ComponentRef<typeof View>
/** Sticker Component.
 * @param children {ReactNode} Short content: text, optionally with an icon; never wraps
 * @param size {StickerSize} Fixed size: `default` (32px high) or `small` (24px high); defaults to `default`
 * @param background {BackgroundColors} Semantic background color; defaults to `secondary`; the text is the default color on a light background, white otherwise
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Sticker: ForwardRefExoticComponent<
  PropsWithChildren<StickerProps> & RefAttributes<StickerNativeRef>
> = forwardRef<StickerNativeRef, PropsWithChildren<StickerProps>>(
  (
    {
      children,
      size = StickerSize.default,
      background = "secondary",
      id,
      testId,
      style,
    },
    ref
  ) => {
    const styles = useStickerStyles()
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
Sticker.displayName = "Sticker"
