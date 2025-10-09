import { AlignableProps, StatusProps, TrilogyColor, TrilogyColorValues } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'
import React from 'react'
import { View } from 'react-native'
import { ProgressRadialItemProps } from '../item/ProgressRadialItemProps'

/**
 * Progress Radial Interface
 */

export interface ProgressRadialProps extends StatusProps, AlignableProps, CommonProps {
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

export type ProgressRadialRef = HTMLDivElement
export type ProgressRadialNativeRef = View
