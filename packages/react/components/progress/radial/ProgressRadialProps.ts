import { AlignableProps, StatusProps, TrilogyColor, TrilogyColorValues } from '@/objects'
import React from 'react'
import { ProgressRadialItemProps } from './item/ProgressRadialItemProps'

/**
 * Progress Radial Interface
 */

export interface ProgressRadialProps extends StatusProps, AlignableProps {
  children?: React.ReactElement<ProgressRadialItemProps> | React.ReactNode
  label?: string | React.ReactNode
  value?: number
  valueColor?: TrilogyColor | TrilogyColorValues
  secondValue?: number
  secondValueColor?: TrilogyColor | TrilogyColorValues
  description?: string | React.ReactNode
  className?: string
  full?: boolean
  disk?: boolean
  skeleton?: boolean
  small?: boolean
}
