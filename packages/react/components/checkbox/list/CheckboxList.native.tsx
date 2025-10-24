import { AutoLayoutWrapper } from '@/components/autolayout'
import { SpacingMatrix, SpacingMatrixMode } from '@/components/autolayout/SpacingMatrix'
import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import { Text } from '@/components/text'
import * as React from 'react'
import type { CheckboxListNativeRef, CheckboxListProps } from './CheckboxListProps'
import { StyleSheet } from 'react-native'

const { THREE, TWO } = SpacerSize
const { INSERT_SPACE_BETWEEN } = SpacingMatrixMode

const SPACING_MATRIX: SpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'Checkbox', 'Divider', TWO],
  [INSERT_SPACE_BETWEEN, 'Divider', 'Checkbox', TWO],
  [INSERT_SPACE_BETWEEN, 'Checkbox', 'Checkbox', THREE],
]

/**
 * CheckboxList Native Component
 * @param children {ReactNode} CheckboxList children
 * @param autolayout {boolean} Apply auto-layout rules
 * @param groupLabel {string} CheckboxList group label
 */
const CheckboxList = React.forwardRef<CheckboxListNativeRef, CheckboxListProps>(({ children, groupLabel }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    label: {
      marginBottom: 8,
    },
  })

  return (
    <AutoLayoutWrapper {...{ autolayout: SPACING_MATRIX }}>
      {groupLabel && <Text style={styles.label}>{groupLabel}</Text>}
      {children}
    </AutoLayoutWrapper>
  )
})

CheckboxList.displayName = ComponentName.CheckboxList

export default CheckboxList
