import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { AccordionBodyNativeRef, AccordionBodyProps } from './AccordionBodyProps'

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
 */
const AccordionBody = React.forwardRef<AccordionBodyNativeRef, AccordionBodyProps>(
  ({ children, ...others }, ref): JSX.Element => {
    const styles = StyleSheet.create({
      accordionBody: {},
    })

    return (
      <View ref={ref} style={[styles.accordionBody]} {...others}>
        {children}
      </View>
    )
  },
)

AccordionBody.displayName = ComponentName.AccordionBody

export default AccordionBody
