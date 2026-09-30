import { ComponentName } from '@/components/enumsComponentsName'
import { View } from 'react-native'
import { AccordionBodyNativeRef, AccordionBodyProps } from '@/components/accordion/item/body/AccordionBodyProps'
import { forwardRef } from 'react'

/**
 * Accordion Body Component
 * @param children {ReactNode} Children for Accordion body
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const AccordionBody = forwardRef<AccordionBodyNativeRef, AccordionBodyProps>(
  ({ children, testId, ...others }, ref): JSX.Element => {
    return (
      <View ref={ref} testID={testId} {...others}>
        {children}
      </View>
    )
  },
)

AccordionBody.displayName = ComponentName.AccordionBody

export default AccordionBody
