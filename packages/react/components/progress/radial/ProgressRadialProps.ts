import { AlignableProps, Loadable, StatusProps, TrilogyColor, TrilogyColorValues } from '../../../objects'
import React from 'react'
import { ProgressRadialItemProps } from './item/ProgressRadialItemProps'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Progress Radial Interface
 */

export interface ProgressRadialProps extends StatusProps, Loadable, AlignableProps, CommonProps {
  children?: React.ReactElement<ProgressRadialItemProps> | React.ReactNode
  label?: string | React.ReactNode
  value?: number
  valueColor?: TrilogyColor | TrilogyColorValues
  secondValue?: number
  secondValueColor?: TrilogyColor | TrilogyColorValues
  description?: string | React.ReactNode
  full?: boolean
  disk?: boolean
  small?: boolean
}

export type ProgressRadialRef = HTMLDivElement
export type ProgressRadialNativeRef = View
