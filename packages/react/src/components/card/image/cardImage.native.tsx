import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react"
import { Image, type ImageStyle, type StyleProp } from "react-native"

import type { CardImageProps } from "../card.types"
import { useCardImageStyles } from "./cardImage.styles.native"

export type CardImageNativeRef = ComponentRef<typeof Image>
/** CardImage Component.
 * @param src {string} Image URI
 * @param alt {string} Accessible description
 * @param aspectRatio {number} Width-to-height ratio; defaults to 2
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardImage: ForwardRefExoticComponent<
  CardImageProps & RefAttributes<CardImageNativeRef>
> = forwardRef<CardImageNativeRef, CardImageProps>(
  ({ src, alt, aspectRatio = 2, id, testId, style }, ref) => {
    const styles = useCardImageStyles()
    return (
      <Image
        ref={ref}
        nativeID={id}
        testID={testId}
        source={{ uri: src }}
        accessible={!!alt}
        accessibilityLabel={alt || undefined}
        resizeMode="cover"
        style={[
          styles.base.image,
          { aspectRatio },
          style as StyleProp<ImageStyle>,
        ]}
      />
    )
  }
)
CardImage.displayName = "CardImage"
