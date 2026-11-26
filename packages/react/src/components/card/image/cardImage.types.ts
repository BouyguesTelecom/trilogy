import type { CommonProps } from "@/interfaces/commonProps"

/** Props for the card image; inherits `CommonProps`. */
export interface CardImageProps extends CommonProps {
  /** Image URI. */
  src: string
  /** Accessible description, or an empty string for a decorative image. */
  alt: string
  /** Width-to-height ratio; defaults to 2 when vertical and to the image's natural ratio when horizontal. */
  aspectRatio?: number
  /** Detaches the image from the card edges with a margin and rounded corners; defaults to false (image touches the edges). */
  inset?: boolean
}
