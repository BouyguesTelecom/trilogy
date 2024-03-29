import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AccordionHeaderProps } from './AccordionHeaderProps'
import { ComponentName } from '../../enumsComponentsName'

/**
 * Accordion Header
 * @param children {React.ReactNode}
 */
const AccordionHeader = ({ children }: AccordionHeaderProps): JSX.Element => {
  const styles = StyleSheet.create({
    header: {
      maxWidth: '95%',
      minWidth: '95%',
      width: '95%',
    },
  })

  return <View style={styles.header}>{children}</View>
}

AccordionHeader.displayName = ComponentName.AccordionHeader

export default AccordionHeader
