import {
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from "react"

import { clsx, getClassName } from "../../.."
import { useHashClass } from "../../../hooks/useHashClass.web"
import {
  ButtonListAlignItems,
  ButtonListDirection,
  ButtonListJustifyContent,
} from "./buttonList.generated"
import { ButtonListProps } from "./buttonList.types"

export type ButtonListRef = HTMLDivElement
type Props = PropsWithChildren<ButtonListProps>

export const ButtonList: ForwardRefExoticComponent<
  Props & RefAttributes<ButtonListRef>
> = forwardRef<ButtonListRef, Props>(
  (
    {
      alignItems = ButtonListAlignItems.center,
      direction = ButtonListDirection.column,
      justifyContent = ButtonListJustifyContent.center,
      className,
      id,
      testId,
      children,
      wrap,
    },
    ref
  ) => {
    const classes = useHashClass(
      clsx(
        "buttonList",
        alignItems && getClassName("align-items", alignItems),
        direction && getClassName("flex-direction", direction),
        justifyContent && getClassName("justify-content", justifyContent),
        wrap && getClassName("flex-wrap", wrap),
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
