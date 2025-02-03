import { AccordionHeaderProps } from '@/components/accordion/item/header/AccordionHeaderProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

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
