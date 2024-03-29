import React, { createContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { AccordionProps } from './AccordionProps'
import { ComponentName } from '../enumsComponentsName'

export const AccordionContext = createContext({ inverted: false })

/**
 * Accordion Component
 * @param children {ReactNode}
 */
const Accordion = ({  inverted, ...others }: AccordionProps): JSX.Element => {
  const styles = StyleSheet.create({
    accordion: {
      width: '100%',
      minHeight: 10,
      borderRadius: 6,
    },
  })

  return (
    <AccordionContext.Provider value={{ inverted: inverted || false }}>
      <View style={styles.accordion} {...others} />
    </AccordionContext.Provider>
  )
}

Accordion.displayName = ComponentName.Accordion
export default Accordion
