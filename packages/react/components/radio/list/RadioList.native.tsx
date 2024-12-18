import * as React from 'react'
import { AutoLayoutWrapper } from '@/components/autolayout'
import { SpacerSize } from '@/components/spacer'
import { SpacingMatrixMode, SpacingMatrix } from '@/components/autolayout/SpacingMatrix'
import type { RadioListProps } from './RadioListProps'
import { ComponentName } from '@/components/enumsComponentsName'

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
const RadioList = ({ children }: RadioListProps): JSX.Element => {
  return <AutoLayoutWrapper {...{ autolayout: SPACING_MATRIX, children }} />
}

RadioList.displayName = ComponentName.RadioList

export default RadioList
