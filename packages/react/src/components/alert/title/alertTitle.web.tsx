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

import { AlertTitleMarkup, type AlertTitleProps } from "./alertTitle.types"

export type AlertTitleRef = HTMLElement
type Props = PropsWithChildren<AlertTitleProps>

export const AlertTitle: ForwardRefExoticComponent<
  Props & RefAttributes<AlertTitleRef>
> = forwardRef<AlertTitleRef, Props>(
  ({ testId, className, id, markup, children, ...others }, ref) => {
    const classes = useHashClass(clsx("alertTitle", className))

    const Component: ElementType =
      markup &&
      Object.values(AlertTitleMarkup).includes(markup as AlertTitleMarkup)
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

AlertTitle.displayName = "AlertTitle"
