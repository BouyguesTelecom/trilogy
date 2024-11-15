import React from 'react'

import { AutoLayoutWrapper } from '@/components/autolayout'
import type { SpacingMatrix } from '@/components/autolayout/SpacingMatrix'
import { SpacingMatrixMode } from '@/components/autolayout/SpacingMatrix'
import { ComponentName } from '@/components/enumsComponentsName'
import type { RadioListProps } from '@/components/radio/list/RadioListProps'
import { SpacerSize } from '@/components/spacer'

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
const RadioList = ({ autolayout = SPACING_MATRIX, children }: RadioListProps): JSX.Element => {
  return <AutoLayoutWrapper {...{ autolayout, children }} />
}

RadioList.displayName = ComponentName.RadioList

export default React.forwardRef(RadioList)
