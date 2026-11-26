import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { CardSectionProps } from "../card.types"

/** CardHeader Component.
 * @param children {ReactNode} Header content
 * @param background {BackgroundColors} Optional semantic background
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardHeader: ForwardRefExoticComponent<
  PropsWithChildren<CardSectionProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropsWithChildren<CardSectionProps>>(
  ({ children, background, id, testId, className, style }, ref) => {
    const classes = useHashClass(
      clsx(
        "cardHeader",
        background && (background === "background" ? "bg" : `bg-${background}`),
        className
      )
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
CardHeader.displayName = "CardHeader"
