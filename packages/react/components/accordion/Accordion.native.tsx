import { AccordionNativeRef, AccordionProps } from '@/components/accordion/AccordionProps'
import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * Accordion Component
 * @param children {React.ReactNode} Accordion items (AccordionItem components)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 * @param id {string} Custom id attribute
 */
const Accordion = React.forwardRef<AccordionNativeRef, AccordionProps>(({ testId, ...others }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    accordion: {
      width: '100%',
      minHeight: 10,
      borderRadius: 6,
    },
  })

  return <View ref={ref} testID={testId} style={styles.accordion} {...others} />
})

Accordion.displayName = ComponentName.Accordion
export default Accordion
