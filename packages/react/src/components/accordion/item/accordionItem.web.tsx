import {
  forwardRef,
  type CSSProperties,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import {
  AccordionItemContext,
  useAccordionItemState,
} from "../accordionContext"
import type { AccordionItemProps } from "./accordionItem.types"

/**
 * AccordionItem Component, rendered as a `details` element on Web.
 * @param children {ReactNode} Header and expandable body
 * @param open {boolean} Controlled open state
 * @param defaultOpen {boolean} Initial uncontrolled open state; defaults to false
 * @param onOpenChange {(open: boolean) => void} Called when the user requests a state change
 * @param disabled {boolean} Prevents activation; defaults to false
 * @param testId {string} Test identifier
 * @param id {string} Element identifier on Web
 * @param style {CSSProperties | StyleProp<ViewStyle | TextStyle>} Inline style override
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS classes
 * @param ref {Ref<HTMLDetailsElement>} Reference to the details element
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AccordionItem: ForwardRefExoticComponent<
  PropsWithChildren<AccordionItemProps> & RefAttributes<HTMLDetailsElement>
> = forwardRef<HTMLDetailsElement, PropsWithChildren<AccordionItemProps>>(
  (
    {
      children,
      id,
      testId,
      className,
      style,
      open,
      defaultOpen,
      onOpenChange,
      disabled,
    },
    ref
  ) => {
    const state = useAccordionItemState({
      open,
      defaultOpen,
      onOpenChange,
      disabled,
    })
    const classes = useHashClass(clsx("accordionItem", className))
    return (
      <AccordionItemContext.Provider value={state}>
        <details
          ref={ref}
          id={id}
          data-testid={testId}
          data-disabled={state.disabled || undefined}
          open={state.open}
          className={classes}
          style={style as CSSProperties}
        >
          {children}
        </details>
      </AccordionItemContext.Provider>
    )
  }
)
AccordionItem.displayName = "AccordionItem"
