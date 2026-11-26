import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { CardImageProps } from "../card.types"

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
  CardImageProps & RefAttributes<HTMLImageElement>
> = forwardRef<HTMLImageElement, CardImageProps>(
  ({ src, alt, aspectRatio = 2, id, testId, className, style }, ref) => {
    const classes = useHashClass(clsx("cardImage", className))
    return (
      <img
        ref={ref}
        id={id}
        data-testid={testId}
        className={classes}
        src={src}
        alt={alt}
        style={{
          display: "block",
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "100%",
          minWidth: 0,
          height: "auto",
          margin: 0,
          overflow: "hidden",
          objectFit: "cover",
          borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
          aspectRatio,
          ...(style as CSSProperties),
        }}
      />
    )
  }
)
CardImage.displayName = "CardImage"
