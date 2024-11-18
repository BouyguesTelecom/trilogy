import React from 'react'

import { ProgressRadialItemProps } from '@/components/progress/radial/item/ProgressRadialItemProps'
import { AlignableProps } from '@/objects/facets/Alignable'
import { StatusProps, StatusState, StatusStateValues } from '@/objects/facets/Status'

/**
 * Progress Radial Interface
 */

export interface ProgressRadialProps extends StatusProps, AlignableProps {
  children?: React.ReactElement<ProgressRadialItemProps> | React.ReactNode
  percent?: number
  label?: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
  full?: boolean
  disk?: boolean
  secondPercent?: number
  secondStatus?: StatusState | StatusStateValues
  skeleton?: boolean
  stacked?: boolean
  small?: boolean
}
