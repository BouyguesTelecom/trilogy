import * as React from 'react'
import clsx from 'clsx'
import { CardContentProps } from './CardContentProps'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Card Content Component
 * @param children {React.ReactNode} Custom Card Content Children
 * @param titleSup {string} Add a sup title
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additionnal CSS Classes
 */
const CardContent = ({ children, className, ...others }: CardContentProps): JSX.Element => {
  const { styled } = useTrilogyContext()
  return (
    <div className={hashClass(styled, clsx('card-content', className))} {...others}>
      {children}
    </div>
  )
}

export default CardContent
