import {
  forwardRef,
  type ElementType,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type Ref,
  type RefAttributes,
} from "react"

import { useHashClass } from "../../hooks/useHashClass.web"
import { clsx } from "../../utils/clsx"
import { AlertMarkup, type AlertProps } from "./alert.types"

export type AlertRef = HTMLElement
type Props = PropsWithChildren<AlertProps>

export const Alert: ForwardRefExoticComponent<Props & RefAttributes<AlertRef>> =
  forwardRef<AlertRef, Props>(
    ({ status, testId, className, id, markup, children, ...others }, ref) => {
      const classes = useHashClass(clsx("alert", status && status, className))

      const Component: ElementType =
        markup && Object.values(AlertMarkup).includes(markup as AlertMarkup)
          ? (markup as ElementType)
          : "div"

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

Alert.displayName = "Alert"
