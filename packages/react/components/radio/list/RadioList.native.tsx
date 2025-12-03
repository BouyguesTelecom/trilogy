import { AutoLayoutWrapper } from '@/components/autolayout/index.native'
import { SpacingMatrix, SpacingMatrixMode } from '@/components/autolayout/SpacingMatrix/index.native'
import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer/index.native'
import { Text } from '@/components/text'
import { isRequiredChild } from '@/helpers/require'
import { TypographyColor } from '@/objects/Typography'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import type { RadioListNativeRef, RadioListProps } from './RadioListProps'

const { THREE, TWO } = SpacerSize
const { INSERT_SPACE_BETWEEN } = SpacingMatrixMode

const SPACING_MATRIX: SpacingMatrix = [
  [INSERT_SPACE_BETWEEN, 'Radio', 'Divider', TWO],
  [INSERT_SPACE_BETWEEN, 'Divider', 'Radio', TWO],
  [INSERT_SPACE_BETWEEN, 'Radio', 'Radio', THREE],
]

/**
 * RadioList Native Component
 * @param children {ReactNode} RadioList children
 * @param autolayout {boolean} Apply auto-layout rules
 * @param label {string} RadioList label
 */
const RadioList = React.forwardRef<RadioListNativeRef, RadioListProps>(({ children, label }, ref): JSX.Element => {
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

RadioList.displayName = ComponentName.RadioList

export default RadioList
