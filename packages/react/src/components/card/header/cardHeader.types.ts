import type { BackgroundColors } from "@/interfaces/backgroundColors"
import type { CommonProps } from "@/interfaces/commonProps"

/** Props for the card header section; inherits `CommonProps`. */
export interface CardHeaderProps extends CommonProps {
  /** Semantic background color; omitted uses the component default. */
  background?: BackgroundColors | `${BackgroundColors}`
}
