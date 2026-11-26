import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { CardImageProps } from "./cardImage.types"

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
  CardImageProps & RefAttributes<HTMLImageElement>
> = forwardRef<HTMLImageElement, CardImageProps>(
  (
    { src, alt, aspectRatio, inset = false, id, testId, className, style },
    ref
  ) => {
    const classes = useHashClass(
      clsx("cardImage", inset && "cardImage-inset", className)
    )
    return (
      <img
        ref={ref}
        id={id}
        data-testid={testId}
        className={classes}
        src={src}
        alt={alt}
        style={{
          ...(aspectRatio !== undefined && { aspectRatio }),
          ...(style as CSSProperties),
        }}
      />
    )
  }
)
CardImage.displayName = "CardImage"
