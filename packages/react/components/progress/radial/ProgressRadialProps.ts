import { AlignableProps, StatusProps, TrilogyColor, TrilogyColorValues } from '../../../objects'
import React from 'react'
import { ProgressRadialItemProps } from './item/ProgressRadialItemProps'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * Progress Radial Interface
 */

export interface ProgressRadialProps extends StatusProps, CommonProps {
  children?: React.ReactElement<ProgressRadialItemProps> | React.ReactNode
  label?: string | React.ReactNode
  value?: number
  valueColor?: TrilogyColor | TrilogyColorValues
  secondValue?: number
  secondValueColor?: TrilogyColor | TrilogyColorValues
  description?: string | React.ReactNode
  full?: boolean
  disk?: boolean
  skeleton?: boolean
  small?: boolean
}

export interface ProgressRadialNativeProps extends ProgressRadialProps, Omit<AlignableProps, 'verticalAlign'> {}
