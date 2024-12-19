import { AccordionProps } from '@/components/accordion/AccordionProps'
import { useTrilogyContext } from '@/context/index'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

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
