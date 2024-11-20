import React from 'react'
import { StyleSheet, View } from 'react-native'

import { AccordionHeaderProps } from '@/components/accordion/header/AccordionHeaderProps'
import { ComponentName } from '@/components/enumsComponentsName'

/**
 * Accordion Header
 * @param children {React.ReactNode}
 */
const AccordionHeader = ({ children }: AccordionHeaderProps, ref: React.Ref<View>): JSX.Element => {
  const styles = StyleSheet.create({
    header: {
      maxWidth: '95%',
      minWidth: '95%',
      width: '95%',
    },
  })

  return (
    <View ref={ref} style={styles.header}>
      {children}
    </View>
  )
}

AccordionHeader.displayName = ComponentName.AccordionHeader

export default React.forwardRef(AccordionHeader)
