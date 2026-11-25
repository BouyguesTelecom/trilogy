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
import type { AccordionHeaderProps } from "./accordionHeader.types"

/**
 * AccordionHeader Component, rendered as a `summary` element on Web.
 * @param children {ReactNode} Header content including an optional AccordionIndicator
 * @param accessibilityLabel {string} Accessible toggle name
 * @param testId {string} Test identifier
 * @param id {string} Toggle identifier; generated when omitted
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * @param ref {Ref<HTMLElement>} Reference to the summary element
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AccordionHeader: ForwardRefExoticComponent<
  PropsWithChildren<AccordionHeaderProps> & RefAttributes<HTMLElement>
> = forwardRef<HTMLElement, PropsWithChildren<AccordionHeaderProps>>(
  ({ children, id, testId, className, style, accessibilityLabel }, ref) => {
    const state = useAccordionItem()
    const classes = useHashClass(clsx("accordionHeader", className))
    return (
      <summary
        ref={ref}
        id={id ?? state.headerId}
        data-testid={testId}
        className={classes}
        style={style as CSSProperties}
        role="button"
        aria-label={accessibilityLabel}
        aria-expanded={state.open}
        aria-controls={state.bodyId}
        aria-disabled={state.disabled || undefined}
        tabIndex={state.disabled ? -1 : 0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            state.toggle()
          }
        }}
        onClick={(event) => {
          event.preventDefault()
          state.toggle()
        }}
      >
        {children}
      </summary>
    )
  }
)
AccordionHeader.displayName = "AccordionHeader"
