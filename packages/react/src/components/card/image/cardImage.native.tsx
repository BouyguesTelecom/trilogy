import {
  forwardRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react"
import { Image, type ImageStyle, type StyleProp } from "react-native"

import type { CardImageProps } from "../card.types"
import { useCardOrientation } from "../cardOrientation.native"
import { useCardImageStyles } from "./cardImage.styles.native"
import { useImageRatio } from "./cardImageRatio.native"

export type CardImageNativeRef = ComponentRef<typeof Image>
/** CardImage Component.
 * @param src {string} Image URI
 * @param alt {string} Accessible description
 * @param aspectRatio {number} Width-to-height ratio; defaults to 2 when vertical and to the image's natural ratio when horizontal
 * @param inset {boolean} Detaches the image from the card edges; defaults to false
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
  ({ src, alt, aspectRatio, inset = false, id, testId, style }, ref) => {
    const styles = useCardImageStyles()
    const horizontal = useCardOrientation() === "horizontal"
    const naturalRatio = useImageRatio(
      src,
      horizontal && aspectRatio === undefined
    )
    const ratio = aspectRatio ?? (horizontal ? naturalRatio : 2)
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
          horizontal && styles.horizontal.image,
          inset && styles.inset.image,
          ratio !== undefined && { aspectRatio: ratio },
          style as StyleProp<ImageStyle>,
        ]}
      />
    )
  }
)
CardImage.displayName = "CardImage"
