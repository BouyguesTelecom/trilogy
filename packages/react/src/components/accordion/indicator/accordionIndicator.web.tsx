import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import { useAccordionItem } from "../accordionContext"
import type { AccordionIndicatorProps } from "./accordionIndicator.types"

/**
 * AccordionIndicator Component
 * @param children {ReactNode} Caller-provided decorative icon
 * @param testId {string} Test identifier
 * @param id {string} Element identifier on Web
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AccordionIndicator: ForwardRefExoticComponent<
  PropsWithChildren<AccordionIndicatorProps> & RefAttributes<HTMLSpanElement>
> = forwardRef<HTMLSpanElement, PropsWithChildren<AccordionIndicatorProps>>(
  ({ children, id, testId, className, style }, ref) => {
    const state = useAccordionItem()
    const classes = useHashClass(clsx("accordionIndicator", className))
    return (
      <span
        ref={ref}
        id={id}
        data-testid={testId}
        className={classes}
        style={style as CSSProperties}
        aria-hidden="true"
        data-open={state.open || undefined}
      >
        {children}
      </span>
    )
  }
)
AccordionIndicator.displayName = "AccordionIndicator"
