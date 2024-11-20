import React from 'react'
import { StyleSheet, View } from 'react-native'

import { AccordionBodyProps } from '@/components/accordion/body/AccordionBodyProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Accordion Body Component
 * @param children {React.ReactNode} Children for Accordion body
 */
const AccordionBody = ({ children, ...others }: AccordionBodyProps, ref: React.Ref<View>): JSX.Element => {
  const styles = StyleSheet.create({
    accordionBody: {},
  })

  return (
    <View ref={ref} style={[styles.accordionBody]} {...others}>
      {children}
    </View>
  )
}

AccordionBody.displayName = ComponentName.AccordionBody

export default React.forwardRef(AccordionBody)
