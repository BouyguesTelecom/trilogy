import { hashClass } from '@/helpers'
import clsx from 'clsx'
import * as React from 'react'
import { AccordionHeaderProps } from './AccordionHeaderProps'

/**
 * Accordion Header
 * @param className {string} Additionnal CSS Classes
 * @param children {React.ReactNode}
 * @param testId
 * @param others
 */
const AccordionHeader = ({ children, className, id, ...others }: AccordionHeaderProps): React.JSX.Element => {
  return (
    <summary id={id} className={hashClass(clsx('accordion-header', className))} role='button' {...others}>
      {children}
    </summary>
  )
}

export default AccordionHeader
