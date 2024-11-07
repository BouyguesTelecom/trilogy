import * as React from 'react'
import { AccordionHeaderProps } from './AccordionHeaderProps'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Accordion Header
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param testId
 * @param others
 */
const AccordionHeader = ({ children, className, id, ...others }: AccordionHeaderProps): React.JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <summary
      id={id}
      data-accordion-header={true}
      className={hashClass(styled, clsx('accordion-header', className))}
      role='button'
      {...others}
    >
      {children}
    </summary>
  )
}

export default AccordionHeader
