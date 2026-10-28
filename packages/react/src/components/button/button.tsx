import { forwardRef, PropsWithChildren } from "react"

import type { ButtonProps } from "@/components/button/button.types"

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(({ children, variant, iconLeft, iconRight, disabled }, ref) => {
  return (
    <button ref={ref} disabled={disabled}>
      {children}
    </button>
  )
})
