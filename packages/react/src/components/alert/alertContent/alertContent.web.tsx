import {
  forwardRef,
  type ForwardRefExoticComponent,
  type PropsWithChildren,
  type Ref,
  type RefAttributes,
} from "react"
import { clsx } from "@/utils/clsx"

import { useHashClass } from "@/hooks/useHashClass.web"

import { type AlertContentProps } from "./alertContent.types"

export type AlertContentRef = HTMLElement
type Props = PropsWithChildren<AlertContentProps>

export const AlertContent: ForwardRefExoticComponent<
  Props & RefAttributes<AlertContentRef>
> = forwardRef<AlertContentRef, Props>(
  ({ testId, className, id, children, ...others }, ref) => {
    const classes = useHashClass(clsx("alertContent", className))

    return (
      <div
        data-testid={testId}
        ref={ref as Ref<any>}
        id={id}
        className={classes}
        {...others}
      >
        {children}
      </div>
    )
  }
)

AlertContent.displayName = "AlertContent"
