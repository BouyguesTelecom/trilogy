import { AlignableProps, Dev, StatusProps, TrilogyColor, TrilogyColorValues } from '../../../objects'
import { ReactElement, ReactNode } from 'react'
import { ProgressRadialItemProps } from './item/ProgressRadialItemProps'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Progress Radial Interface
 */

export interface ProgressRadialProps extends StatusProps, AlignableProps, CommonProps, Dev {
  children?: ReactElement<ProgressRadialItemProps> | ReactNode
  label?: string | ReactNode
  value?: number
  valueColor?: TrilogyColor | TrilogyColorValues
  secondValue?: number
  secondValueColor?: TrilogyColor | TrilogyColorValues
  description?: string | ReactNode
  full?: boolean
  disk?: boolean
  skeleton?: boolean
  small?: boolean
}

export type ProgressRadialRef = HTMLDivElement
export type ProgressRadialNativeRef = View
