import { ComponentName } from '@/components/enumsComponentsName'
import { useTrilogyContext } from '@/context'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import * as React from 'react'
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
    const { styled } = useTrilogyContext()

    return (
      <summary
        ref={ref}
        id={id}
        className={hashClass(styled, clsx('accordion-header', className))}
        role='button'
        {...others}
      >
        {children}
      </summary>
    )
  },
)

AccordionHeader.displayName = ComponentName.AccordionHeader
export default AccordionHeader
