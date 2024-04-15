import React from 'react'
import { DisclaimerWebProps } from './DisclaimerProps'
import { ComponentName } from '../enumsComponentsName'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from '../accordion'
import { Text, TextLevels } from '../text'
import { TypographyBold } from '../../objects/Typography/TypographyBold'

/**
 * Disclaimer component
 * @param children {React.ReactNode|string} Disclaimer Item Children
 */
const Disclaimer = ({ children, title, ...others }: DisclaimerWebProps): JSX.Element => {
  return (
    <Accordion {...others}>
      <AccordionItem>
        <AccordionHeader>
          <Text level={TextLevels.TWO} typo={TypographyBold.TEXT_WEIGHT_SEMIBOLD}>
            {title}
          </Text>
        </AccordionHeader>
        <AccordionBody>
          {children && typeof children.valueOf() === 'string' ? <Text>{String(children)}</Text> : children}
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

Disclaimer.displayName = ComponentName.Disclaimer

export default Disclaimer
