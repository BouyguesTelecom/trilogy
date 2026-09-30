import { ComponentName } from '@/components/enumsComponentsName'
import { View } from 'react-native'
import { AccordionHeaderNativeRef, AccordionHeaderProps } from '@/components/accordion/item/header/AccordionHeaderProps'
import { memoStyles } from '@/helpers/memoStyles'
import { forwardRef } from 'react'

/**
 * Accordion Header
 * @param children {ReactNode} Header content
 * @param id {string} Custom id attribute
 * @param testId {string} Test Id for Test Integration
 */
const AccordionHeader = forwardRef<AccordionHeaderNativeRef, AccordionHeaderProps>(({ children }, ref): JSX.Element => {
  const styles = memoStyles({
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
})

AccordionHeader.displayName = ComponentName.AccordionHeader

export default AccordionHeader
