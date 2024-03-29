import React, { createContext } from 'react'
import { AccordionProps } from './AccordionProps'
import clsx from 'clsx'
import { useTrilogyContext } from '../../context/index'
import { hashClass } from '../..//helpers/hashClassesHelpers'

export const AccordionContext = createContext({ inverted: false })

/**
 * Accordion Component
 * @param className {string} Additionnal CSS Classes
 * @param children {ReactNode}
 * @param inverted {boolean} Accordion with white background
 */
const Accordion = ({ className, testId, inverted, ...others }: AccordionProps): React.JSX.Element => {
  const { styled } = useTrilogyContext()
  const classes = hashClass(styled, clsx('accordions', className))
  return (
    <AccordionContext.Provider value={{ inverted: inverted || false }}>
      <section className={classes} {...others} data-testid={testId} />
    </AccordionContext.Provider>
  )
}

export default Accordion
