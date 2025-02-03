import { AccordionItemProps } from '@/components/accordion/item/AccordionItemProps'
import { hashClass } from '@/helpers/hashClassesHelpers'
import clsx from 'clsx'
import React from 'react'

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
  id = React.useId(),
  onClick,
  disabled,
  ...others
}: AccordionItemProps): JSX.Element => {
  const classes = hashClass(clsx('accordion-item', className))
  const ariaProps: { 'aria-disabled'?: boolean; tabIndex?: number } = {}

  if (disabled) {
    ariaProps['tabIndex'] = -1
    ariaProps['aria-disabled'] = true
  }

  return (
    <details open={open} data-testid={id} className={classes} id={id} onClick={onClick} {...ariaProps} {...others}>
      {children}
    </details>
  )
}

export default AccordionItem
