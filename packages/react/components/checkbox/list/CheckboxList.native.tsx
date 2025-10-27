import { AutoLayoutWrapper } from '@/components/autolayout'
import { SpacingMatrix, SpacingMatrixMode } from '@/components/autolayout/SpacingMatrix'
import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import { Text } from '@/components/text'
import * as React from 'react'
import type { CheckboxListNativeRef, CheckboxListProps } from './CheckboxListProps'
import { StyleSheet } from 'react-native'
import { isRequiredChild } from '@/helpers/require'
import { TypographyColor } from '@/objects/Typography'

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
 * @param label {string} CheckboxList label
 */
const CheckboxList = React.forwardRef<CheckboxListNativeRef, CheckboxListProps>(({ children, label }, ref): JSX.Element => {
  const styles = StyleSheet.create({
    label: {
      marginBottom: 8,
    },
  })

  return (
    <AutoLayoutWrapper {...{ autolayout: SPACING_MATRIX }}>
      {label && (
        <Text style={styles.label}>{label} {isRequiredChild(children) && <Text typo={TypographyColor.TEXT_ERROR}>*</Text>}</Text>
      )}
      {children}
    </AutoLayoutWrapper>
  )
})

CheckboxList.displayName = ComponentName.CheckboxList

export default CheckboxList
