import { useTrilogyContext } from '@/context'
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
const AccordionHeader = ({ children, className, testId, ...others }: AccordionHeaderProps): React.JSX.Element => {
  const { styled } = useTrilogyContext()

  return (
    <summary
      data-accordion-header={true}
      className={hashClass(clsx('accordion-header', className))}
      role='button'
      {...others}
      data-testid={testId}
    >
      {children}
    </summary>
  )
}

export default AccordionHeader
