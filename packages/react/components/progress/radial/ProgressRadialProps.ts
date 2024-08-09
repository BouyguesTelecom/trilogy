import { StatusProps, StatusState, StatusStateValues, AlignableProps } from '../../../objects'
import React from 'react'
import { ProgressRadialItemProps } from './item/ProgressRadialItemProps'

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
