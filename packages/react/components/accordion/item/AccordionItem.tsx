import React, { useRef } from 'react'
import { AccordionItemProps, OnClickEvent } from './AccordionItemProps'
import clsx from 'clsx'
import { hashClass } from '@/helpers'
import { useTrilogyContext } from '@/context'

/**
 * Accordion Item Component
 * @param active {boolean} Active Accordion Item
 * @param className {string} Additionnal CSS Classes
 * @param id {string} id for accordion item
 * @param onClick {ClickEvent} onClick Event
 * @param disabled {boolean} Disabled AccordionItem
 * @param children {ReactNode}
 */
const AccordionItem = ({
  open,
  className,
  children,
  id,
  onClick,
  disabled,
  ...others
}: AccordionItemProps): JSX.Element => {
  const ref = useRef<HTMLDetailsElement>(null)
  const { styled } = useTrilogyContext()


  const classes = hashClass(styled, clsx('accordion-item', className))

  const ariaProps: { 'aria-disabled'?: boolean; tabIndex?: number } = {}

  if (disabled) {
    ariaProps['tabIndex'] = -1
    ariaProps['aria-disabled'] = true
  }

  return (
    <details
      open={open}
      {...ariaProps}
      data-testid={id}
      className={classes}
      ref={ref}
      id={id}
      {...others}
      onClick={(e: OnClickEvent) => (onClick ? onClick(e) : null)}
    >
      {children}
    </details>
  )
}

export default AccordionItem
