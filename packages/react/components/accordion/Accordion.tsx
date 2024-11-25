import * as React from 'react'
import { AccordionProps } from './AccordionProps'
import clsx from 'clsx'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'

/**
 * Accordion Component
 * @param id
 * @param className {string} Additionnal CSS Classes
 * @param children
 * @param others
 */
const Accordion = ({ id, className, children, ...others }: AccordionProps) => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('accordion', className))
  return (
    <div id={id} className={classes} {...others}>
      {children}
    </div>
  )
}

export default Accordion
