import { SpacingMatrix } from '@/components/autolayout/SpacingMatrix'
import { SpacerSize } from '@/components/spacer'
import { ReactNode } from 'react'

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
