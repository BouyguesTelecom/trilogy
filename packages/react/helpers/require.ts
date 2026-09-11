import { Children, isValidElement } from 'react'
export const isRequiredChild = (children: React.ReactNode) => Children.toArray(children).some(
  (child) => isValidElement(child) && child.props.required
)
