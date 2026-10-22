import { AccordionNativeRef, AccordionProps } from '@/components/accordion/AccordionProps'
import { ComponentName } from '@/components/enumsComponentsName'
import { forwardRef, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import { useThemeSelector } from '@/hooks/useThemeSelector'
import { SpacerSize } from '@/components/spacer/SpacerEnum'

/**
 * Accordion Component
 * @param children {ReactNode} Accordion items (AccordionItem components)
 * @param testId {string} Test Id for Test Integration
 * @param accessibilityLabel {string} Accessibility label
 * @param id {string} Custom id attribute
 */
const Accordion = forwardRef<AccordionNativeRef, AccordionProps>(({ testId, ...others }, ref): JSX.Element => {
  const borderRadius = useThemeSelector((theme) => theme.radius.radiusMd)
  const themeStyles = useMemo(() => ({ borderRadius }), [borderRadius])

  return <View ref={ref} testID={testId} style={[styles.accordion, themeStyles]} {...others} />
})

Accordion.displayName = ComponentName.Accordion
export default Accordion

const styles = StyleSheet.create({
  accordion: {
    width: '100%',
    minHeight: 10,
    gap: SpacerSize.TWO,
  },
})
