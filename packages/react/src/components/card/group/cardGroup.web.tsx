import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { CardGroupProps } from "../card.types"

/** CardGroup Component.
 * @param children {ReactNode} A Card and its CardGroupAddOn siblings
 * @param id {string} Element identifier
 * @param testId {string} Test identifier
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const CardGroup: ForwardRefExoticComponent<
  PropsWithChildren<CardGroupProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropsWithChildren<CardGroupProps>>(
  ({ children, id, testId, className, style }, ref) => {
    const classes = useHashClass(clsx("cardGroup", className))
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
CardGroup.displayName = "CardGroup"
