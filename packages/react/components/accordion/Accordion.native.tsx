import React from 'react'
import { StyleSheet, View } from 'react-native'

import { AccordionProps } from '@/components/accordion/AccordionProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Accordion Component
 * @param children {ReactNode}
 */
const Accordion = ({ ...others }: AccordionProps, ref: React.Ref<View>): JSX.Element => {
  return <View ref={ref} style={styles.accordion} {...others} />
}

Accordion.displayName = ComponentName.Accordion
export default React.forwardRef(Accordion)

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
    minHeight: 10,
    borderRadius: 6,
  },
})
