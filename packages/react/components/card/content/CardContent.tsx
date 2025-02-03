import { CardContentProps } from '@/components/card/content/CardContentProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

/**
 * Card Content Component
 * @param children {React.ReactNode} Custom Card Content Children
 * @param titleSup {string} Add a sup title
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const CardContent = ({ children, className, id, ...others }: CardContentProps): JSX.Element => {
  return (
    <div id={id} className={hashClass(clsx('card-content', className))} {...others}>
      {children}
    </div>
  )
}

export default CardContent
