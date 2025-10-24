import { AutoLayoutWrapper } from '@/components/autolayout'
import { SpacingMatrix, SpacingMatrixMode } from '@/components/autolayout/SpacingMatrix'
import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer'
import { Text } from '@/components/text'
import * as React from 'react'
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
 */
const RadioList = React.forwardRef<RadioListNativeRef, RadioListProps>(({ children, groupLabel }, ref): JSX.Element => {
  return (
    <AutoLayoutWrapper {...{ autolayout: SPACING_MATRIX }}>
      {groupLabel && <Text>{groupLabel}</Text>}
      {children}
    </AutoLayoutWrapper>
  )
})

RadioList.displayName = ComponentName.RadioList

export default RadioList
