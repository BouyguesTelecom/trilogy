import { ReactNode } from 'react'

import { SpacingMatrix } from '@/components/autolayout/SpacingMatrix'
import { SpacerSize } from '@/components/spacer'

type EdgeType = 'bottom' | 'top'

type AutoLayoutProps = {
  children: ReactNode
  edges?: EdgeType[]
  edgeSize?: SpacerSize
  noSpace?: boolean
  /**
   * @deprecated
   */
  matrix?: SpacingMatrix
}

export type { AutoLayoutProps, EdgeType }
