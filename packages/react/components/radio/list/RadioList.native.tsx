import { AutoLayoutWrapper } from '@/components/autolayout/index.native'
import { SpacingMatrix, SpacingMatrixMode } from '@/components/autolayout/SpacingMatrix'
import { ComponentName } from '@/components/enumsComponentsName'
import { SpacerSize } from '@/components/spacer/index.native'
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
const RadioList = React.forwardRef<RadioListNativeRef, RadioListProps>(({ children }, ref): JSX.Element => {
  const refList = React.useRef(ref)
  return <AutoLayoutWrapper {...{ autolayout: SPACING_MATRIX, children }} />
})

RadioList.displayName = ComponentName.RadioList

export default RadioList
