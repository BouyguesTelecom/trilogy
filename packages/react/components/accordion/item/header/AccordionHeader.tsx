import { ComponentName } from '@/components/enumsComponentsName'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'
import { AccordionHeaderProps, AccordionHeaderRef } from './AccordionHeaderProps'

/**
 * Accordion Header
 * @param className {string} Additional CSS Classes
 * @param children {React.ReactNode}
 * @param testId
 * @param others
 */
const AccordionHeader = React.forwardRef<AccordionHeaderRef, AccordionHeaderProps>(
  ({ children, className, id, ...others }, ref): React.JSX.Element => {
    return (
      <summary ref={ref} id={id} className={hashClass(clsx('accordion-header', className))} role='button' {...others}>
        {children}
      </summary>
    )
  },
)

AccordionHeader.displayName = ComponentName.AccordionHeader
export default AccordionHeader
