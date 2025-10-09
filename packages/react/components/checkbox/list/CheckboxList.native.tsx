import { AutoLayoutWrapper } from '@/components/autolayout/index.native'
import { SpacingMatrix, SpacingMatrixMode } from '@/components/autolayout/SpacingMatrix/index.native'
import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer/index.native'
import * as React from 'react'
import type { CheckboxListNativeRef, CheckboxListProps } from './CheckboxListProps/index.native'

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
 */
const CheckboxList = React.forwardRef<CheckboxListNativeRef, CheckboxListProps>(({ children }, ref): JSX.Element => {
  return <AutoLayoutWrapper {...{ autolayout: SPACING_MATRIX, children }} />
})

CheckboxList.displayName = ComponentName.CheckboxList

export default CheckboxList
