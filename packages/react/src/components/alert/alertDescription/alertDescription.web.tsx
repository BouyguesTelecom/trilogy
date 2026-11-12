import {
  forwardRef,
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type Ref,
  type RefAttributes,
} from "react"

import { useHashClass } from "../../../hooks/useHashClass.web"
import { clsx } from "../../../utils/clsx"
import {
  AlertDescriptionMarkup,
  type AlertDescriptionProps,
} from "./alertDescription.types"

export type AlertDescriptionRef = HTMLElement
type Props = PropsWithChildren<AlertDescriptionProps>

export const AlertDescription: ForwardRefExoticComponent<
  Props & RefAttributes<AlertDescriptionRef>
> = forwardRef<AlertDescriptionRef, Props>(
  ({ testId, className, id, markup, children, ...others }, ref) => {
    const classes = useHashClass(clsx("alertDescription", className))

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
