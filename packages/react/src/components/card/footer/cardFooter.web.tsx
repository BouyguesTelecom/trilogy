import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { CardFooterProps } from "./cardFooter.types"

/** CardFooter Component.
 * @param children {ReactNode} Footer content
 * @param background {BackgroundColors} Optional semantic background; the top border takes the same color
 * @param padding {CardFooterPadding} Padding token (`xxxl` to `none`); omitted keeps `md`
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardFooter: ForwardRefExoticComponent<
  PropsWithChildren<CardFooterProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropsWithChildren<CardFooterProps>>(
  ({ children, background, padding, id, testId, className, style }, ref) => {
    const classes = useHashClass(
      clsx(
        "cardFooter",
        background && "cardFooter-filled",
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
CardFooter.displayName = "CardFooter"
