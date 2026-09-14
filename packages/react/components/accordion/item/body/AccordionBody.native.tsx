import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef } from 'react'
import { View } from 'react-native'
import { AccordionBodyNativeRef, AccordionBodyProps } from '@/components/accordion/item/body/AccordionBodyProps'

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
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
