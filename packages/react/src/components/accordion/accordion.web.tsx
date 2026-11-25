import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import type { AccordionProps } from "./accordion.types"

/**
 * Accordion Component
 * @param children {ReactNode} Independently expandable accordion items
 * @param testId {string} Test identifier
 * @param id {string} Element identifier on Web
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const Accordion: ForwardRefExoticComponent<
  PropsWithChildren<AccordionProps> & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, PropsWithChildren<AccordionProps>>(
  ({ children, id, testId, className, style }, ref) => {
    const classes = useHashClass(clsx("accordion", className))
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
Accordion.displayName = "Accordion"
