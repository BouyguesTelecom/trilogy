import { AccordionNativeRef, AccordionProps } from '@/components/accordion/AccordionProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef } from 'react'
import { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { useThemeRadius } from '@/hooks/useThemeRadius'

/**
 * Accordion Component
 * @param children {React.ReactNode} Accordion items (AccordionItem components)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 * @param id {string} Custom id attribute
 */
const Accordion = forwardRef<AccordionNativeRef, AccordionProps>(({ testId, ...others }, ref): JSX.Element => {
  const { radiusSm } = useThemeRadius()

  const styles = useMemo(
    () =>
      StyleSheet.create({
        accordion: {
          width: '100%',
          minHeight: 10,
          borderRadius: radiusSm,
        },
      }),
    [radiusSm],
  )

  return <View ref={ref} testID={testId} style={styles.accordion} {...others} />
})

Accordion.displayName = ComponentName.Accordion
export default Accordion
