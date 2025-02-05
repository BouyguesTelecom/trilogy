import { AccordionProps } from '@/components/accordion/AccordionProps'
import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * Accordion Component
 * @param children {ReactNode}
 */
const Accordion = ({ ...others }: AccordionProps): JSX.Element => {
  const styles = StyleSheet.create({
    accordion: {
      width: '100%',
      minHeight: 10,
      borderRadius: 6,
    },
  })

  return <View style={styles.accordion} {...others} />
}

Accordion.displayName = ComponentName.Accordion
export default Accordion
