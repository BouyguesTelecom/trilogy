import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from "react"

import { clsx, getClassName } from "../.."
import { useHashClass } from "../../hooks/useHashClass.web"
import { ButtonListProps } from "./buttonList.types"

export type ButtonListRef = HTMLDivElement
type Props = PropsWithChildren<ButtonListProps>

export const ButtonList: ForwardRefExoticComponent<
  Props & RefAttributes<ButtonListRef>
> = forwardRef<ButtonListRef, Props>(
  (
    { alignItems, direction, justifyContent, className, id, testId, children },
    ref
  ) => {
    const classes = useHashClass(
      clsx(
        "buttonList",
        alignItems && getClassName("align-items", alignItems),
        direction && getClassName("flex-direction", direction),
        justifyContent && getClassName("justify-content", justifyContent),
        className
      )
    )

    return (
      <div data-testid={testId} ref={ref} id={id} className={classes}>
        {children}
      </div>
    )
  }
)

ButtonList.displayName = "ButtonList"
