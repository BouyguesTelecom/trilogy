import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { CardContentProps } from "./cardContent.types"

/** CardContent Component.
 * @param children {ReactNode} Card content
 * @param background {BackgroundColors} Optional semantic background
 * @param padding {CardContentPadding} Padding token (`xxxl` to `none`); omitted keeps `lg`
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardContent: ForwardRefExoticComponent<
  PropsWithChildren<CardContentProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropsWithChildren<CardContentProps>>(
  ({ children, background, padding, id, testId, className, style }, ref) => {
    const classes = useHashClass(
      clsx(
        "cardContent",
        background && (background === "background" ? "bg" : `bg-${background}`),
        padding && `spacing-${padding}`,
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
CardContent.displayName = "CardContent"
