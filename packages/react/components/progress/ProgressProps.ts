import { StatusProps } from '../../objects/facets/Status'
import { CommonProps } from '../../objects/facets/CommonProps'
import { View } from 'react-native'
import { Dev } from '@/objects/facets/Dev'

/**
 * Progress Interface
 */
export interface ProgressProps extends StatusProps, CommonProps, Dev {
  children?: React.ReactNode
  value?: number
  max?: number
  small?: boolean
  legendStart?: string
  legendCenter?: string
  legendEnd?: string
  stacked?: boolean
}

export type ProgressRef = HTMLDivElement
export type ProgressNativeRef = View
