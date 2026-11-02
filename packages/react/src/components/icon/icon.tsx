import {
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react"

import { clsx } from "../../utils/clsx"

export interface IconProps {
  name: string
  className?: string
  size?: string
}

export const Icon: ForwardRefExoticComponent<
  IconProps & RefAttributes<HTMLElement>
> = forwardRef<HTMLElement, IconProps>(
  ({ name, className, ...others }, ref) => {
    return (
      <i
        ref={ref}
        className={clsx("tri-icon", name, className)}
        aria-hidden="true"
        {...others}
      />
    )
  }
)

Icon.displayName = "Icon"
