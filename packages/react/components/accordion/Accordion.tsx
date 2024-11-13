import * as React from 'react'
import { AccordionProps } from './AccordionProps'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Accordion Component
 * @param className {string} Additionnal CSS Classes
 */
const Accordion = React.forwardRef((props: AccordionProps, ref: React.LegacyRef<HTMLDivElement>) => {
  const { id, className, children, ...others } = props

  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('accordion', className))
  return (
    <div id={id} ref={ref} className={classes} {...others}>
      {children}
    </div>
  )
})

export default Accordion
