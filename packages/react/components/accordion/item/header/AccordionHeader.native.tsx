import { AccordionHeaderProps } from '@/components/accordion/item/header/AccordionHeaderProps'
import { ComponentName } from '@/components/enumsComponentsName'
import React from 'react'
import { StyleSheet, View } from 'react-native'

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
