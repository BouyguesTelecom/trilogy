import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { CardGroupAddOnProps } from "../card.types"

/** CardGroupAddOn Component.
 * @param children {ReactNode} Content straddling the edge of the adjacent Card
 * @param align {CardGroupAddOnAlign} Logical alignment: `start`, `center` or `end`; defaults to `center`
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardGroupAddOn: ForwardRefExoticComponent<
  PropsWithChildren<CardGroupAddOnProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropsWithChildren<CardGroupAddOnProps>>(
  ({ children, align = "center", id, testId, className, style }, ref) => {
    const classes = useHashClass(
      clsx("cardGroupAddOn", `cardGroupAddOn-${align}`, className)
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
CardGroupAddOn.displayName = "CardGroupAddOn"
