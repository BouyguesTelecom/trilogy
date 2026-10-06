import { AccordionNativeRef, AccordionProps } from '@/components/accordion/AccordionProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef } from 'react'
import { View } from 'react-native'
import { memoStyles } from '@/helpers/memoStyles'
import { Theme } from '@/constants/theme'

/**
 * Accordion Component
 * @param children {ReactNode} Accordion items (AccordionItem components)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 * @param id {string} Custom id attribute
 */
const Accordion = forwardRef<AccordionNativeRef, AccordionProps>(({ testId, ...others }, ref): JSX.Element => {
  const styles = memoStyles({
    accordion: {
      width: '100%',
      minHeight: 10,
      borderRadius: Theme.radius.md,
    },
  })

  return <View ref={ref} testID={testId} style={styles.accordion} {...others} />
})

Accordion.displayName = ComponentName.Accordion
export default Accordion
