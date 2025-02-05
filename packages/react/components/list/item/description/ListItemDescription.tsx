import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { ListItemDescriptionProps } from './ListItemDescriptionProps'

/**
 * ListItemDescription Component
 * @param children {React.ReactNode}
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const ListItemDescription = ({ children, className }: ListItemDescriptionProps): JSX.Element => {
  return <dd className={hashClass(clsx(className))}>{children}</dd>
}

export default ListItemDescription
