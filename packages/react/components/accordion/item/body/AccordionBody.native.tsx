import { AccordionBodyProps } from '@/components/accordion/item/body/AccordionBodyProps'
import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
 */
const AccordionBody = ({ children, ...others }: AccordionBodyProps): JSX.Element => {
  const styles = StyleSheet.create({
    accordionBody: {},
  })

  return (
    <View style={[styles.accordionBody]} {...others}>
      {children}
    </View>
  )
}

AccordionBody.displayName = ComponentName.AccordionBody

export default AccordionBody
