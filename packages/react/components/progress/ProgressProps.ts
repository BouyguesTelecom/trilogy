import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'
import { StatusVariant, StatusVariantValues } from '@/interfaces/status'

/**
 * Progress Interface
 */
export interface ProgressProps extends CommonProps, Dev {
  children?: ReactNode
  value?: number
  max?: number
  small?: boolean
  legendStart?: string
  legendCenter?: string
  legendEnd?: string
  stacked?: boolean
  status?: StatusVariant | StatusVariantValues
  id?: string
}

export type ProgressRef = HTMLDivElement
export type ProgressNativeRef = View
