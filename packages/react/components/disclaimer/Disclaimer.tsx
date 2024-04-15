import React from 'react'
import { DisclaimerWebProps } from './DisclaimerProps'
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from '../accordion'
import { is } from '../../services/classify'
import { Text, TextLevels } from '../text'
import clsx from 'clsx'
import { hashClass } from '../../helpers/hashClassesHelpers'
import { TypographyBold } from '../../objects/Typography/TypographyBold'
import { useTrilogyContext } from '../../context/index'

/**
 * Disclaimer component
 * @param children {React.ReactNode|string} Disclaimer Item Children
 * @param className {string} Additionnal css classes
 * @param title {string} Disclaimer Title
 * @param active {boolean} Active Disclaimer Bar
 */
const Disclaimer = ({ children, className, title, active, ...others }: DisclaimerWebProps): JSX.Element => {
  const { styled } = useTrilogyContext()

  const classes = clsx('disclaimer', is('tri'), className)
  const wrapperClasses = clsx('disclaimer-header', is('grouped'), is('tri'))
  const classesBody = clsx('accordion-body', is('clipped'), is('tri'))
  const classesContent = hashClass(styled, clsx('disclaimer-content', active && is('active'), 'subtitle', is('tri')))

  return (
    <Accordion className={classes} {...others}>
      <AccordionItem>
        <AccordionHeader className={wrapperClasses}>
          <Text level={TextLevels.TWO} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
            {title}
          </Text>
        </AccordionHeader>
        <AccordionBody className={classesBody}>
          <div className={classesContent}>
            {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
          </div>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

export default Disclaimer
