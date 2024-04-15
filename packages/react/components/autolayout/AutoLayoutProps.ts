import React from 'react'
import { SpacerSize } from '../spacer/SpacerEnum'
import { SpacingMatrix } from './SpacingMatrix'

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

export type { EdgeType, AutoLayoutProps }
