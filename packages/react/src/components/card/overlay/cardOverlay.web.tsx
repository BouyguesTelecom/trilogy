import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { CardOverlayProps } from "../card.types"

/** CardOverlay Component.
 * @param children {ReactNode} Overlay content
 * @param align {CardOverlayAlign} Alignment; defaults to center
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardOverlay: ForwardRefExoticComponent<
  PropsWithChildren<CardOverlayProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropsWithChildren<CardOverlayProps>>(
  ({ children, align = "center", id, testId, className, style }, ref) => {
    const classes = useHashClass(
      clsx("cardOverlay", `cardOverlay-${align}`, className)
    )
    return (
      <div
        ref={ref}
        id={id}
        data-testid={testId}
        className={classes}
        style={style as CSSProperties}
      >
        {children}
      </div>
    )
  }
)
CardOverlay.displayName = "CardOverlay"
