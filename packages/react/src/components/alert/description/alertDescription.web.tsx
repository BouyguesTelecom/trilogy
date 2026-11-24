import {
  forwardRef,
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type Ref,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import {
  AlertDescriptionMarkup,
  type AlertDescriptionProps,
} from "./alertDescription.types"

export type AlertDescriptionRef = HTMLElement
type Props = PropsWithChildren<AlertDescriptionProps>

/**
 * AlertDescription Component
 * @param children {ReactNode} Alert description content
 * @param id {string} Custom element identifier
 * @param testId {string} Test identifier
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param markup {AlertDescriptionMarkup} HTML element: `p`, `span`, `div`, `h2`, `h3`, `h4`, `h5`, or `h6`; defaults to `p`
 * @param className {string} Additional CSS classes
 * - ------------------------- NATIVE PROPERTIES -----------------------------
 * None.
 */
export const AlertDescription: ForwardRefExoticComponent<
  Props & RefAttributes<AlertDescriptionRef>
> = forwardRef<AlertDescriptionRef, Props>(
  ({ testId, className, id, markup, children, ...others }, ref) => {
    const classes = useHashClass(clsx("text", "text-size-sm", className))

    const Component: ElementType =
      markup &&
      Object.values(AlertDescriptionMarkup).includes(
        markup as AlertDescriptionMarkup
      )
        ? (markup as ElementType)
        : "p"

    return (
      <Component
        data-testid={testId}
        ref={ref as Ref<any>}
        id={id}
        className={classes}
        {...others}
      >
        {children}
      </Component>
    )
  }
)

AlertDescription.displayName = "AlertDescription"
