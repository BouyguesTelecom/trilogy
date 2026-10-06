import { Children, ReactNode, isValidElement } from "react"

export const isRequiredChild = (children: ReactNode) => Children.toArray(children).some(
  (child) => isValidElement(child) && child.props.required
)
