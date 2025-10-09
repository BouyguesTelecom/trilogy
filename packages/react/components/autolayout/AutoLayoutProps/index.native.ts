import { SpacingMatrix } from '@/components/autolayout/SpacingMatrix/index.native'
import { SpacerSize } from '@/components/spacer/index.native'
import * as React from 'react'

type EdgeType = 'bottom' | 'top'

type AutoLayoutProps = {
  children: React.ReactNode
  edges?: EdgeType[]
  edgeSize?: SpacerSize
  noSpace?: boolean
  /**
   * @deprecated
   */
  matrix?: SpacingMatrix
}

export type { AutoLayoutProps, EdgeType }
