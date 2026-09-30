import { Children, isValidElement, ReactNode } from 'react'

export const isRequiredChild = (children: ReactNode) => Children.toArray(children).some(
  (child) => isValidElement(child) && child.props.required
)
