import { CommonProps } from '@/objects/facets/CommonProps'
import { StatusProps } from '@/objects/facets/Status'
import { View } from 'react-native'

/**
 * Progress Interface
 */
export interface ProgressProps extends StatusProps, CommonProps {
  value?: number
  max?: number
  small?: boolean
  legendStart?: string
  legendCenter?: string
  legendEnd?: string
}

export type ProgressRef = HTMLDivElement
export type ProgressNativeRef = View
