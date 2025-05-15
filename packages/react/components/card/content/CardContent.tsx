import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
import { CardContentProps, CardContentRef } from './CardContentProps'

/**
 * Card Content Component
 * @param children {React.ReactNode} Custom Card Content Children
 * @param titleSup {string} Add a sup title
 * - -------------------------- WEB PROPERTIES -------------------------------
 * @param className {string} Additional CSS Classes
 */
const CardContent = React.forwardRef<CardContentRef, CardContentProps>(
  ({ children, className, id, ...others }, ref): JSX.Element => {
    const { styled } = useTrilogyContext()
    return (
      <div ref={ref} id={id} className={hashClass(styled, clsx('card-content', className))} {...others}>
        {children}
      </div>
    )
  },
)

CardContent.displayName = ComponentName.CardContent
export default CardContent
