import { AlertProps, AlertState, AlertStateValues, AlignableProps } from '../../../objects'
import React from 'react'
import { ProgressRadialItemProps } from './item/ProgressRadialItemProps'

/**
 * Progress Radial Interface
 */

export interface ProgressRadialProps extends AlertProps, AlignableProps {
  children?: React.ReactElement<ProgressRadialItemProps> | React.ReactNode
  percent?: number
  label?: string | React.ReactNode
  description?: string | React.ReactNode
  className?: string
  full?: boolean
  disk?: boolean
  secondPercent?: number
  secondAlert?: AlertState | AlertStateValues
  skeleton?: boolean
  stacked?: boolean
  small?: boolean
}
