import { ComponentName } from '@/components/enumsComponentsName'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { AccordionHeaderNativeRef, AccordionHeaderProps } from './AccordionHeaderProps'

/**
 * Accordion Header
 * @param children {React.ReactNode}
 */
const AccordionHeader = React.forwardRef<AccordionHeaderNativeRef, AccordionHeaderProps>(
  ({ children }, ref): JSX.Element => {
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
  },
)

AccordionHeader.displayName = ComponentName.AccordionHeader

export default AccordionHeader
