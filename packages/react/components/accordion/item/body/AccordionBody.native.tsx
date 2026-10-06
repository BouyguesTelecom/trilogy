import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef } from 'react'
import { View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { AccordionBodyNativeRef, AccordionBodyProps } from './AccordionBodyProps'

/**
 * Accordion Body Component
 * @param children {ReactNode} Children for Accordion body
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const AccordionBody = forwardRef<AccordionBodyNativeRef, AccordionBodyProps>(
  ({ children, testId, ...others }, ref): JSX.Element => {
    const styles = memoStyles({
      accordionBody: {},
    })

    return (
      <View ref={ref} style={[styles.accordionBody]} testID={testId} {...others}>
        {children}
      </View>
    )
  },
)

AccordionBody.displayName = ComponentName.AccordionBody

export default AccordionBody
