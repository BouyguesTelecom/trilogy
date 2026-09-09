import { Accessibility, Dev, StatusProps } from '@/objects/facets'
import { View } from 'react-native'

type Styles = { [key: string]: any }

/**
 * Progress Item Interface
 */
export interface ProgressItemProps extends StatusProps, Accessibility, Dev {
  children?: React.ReactNode
  percent: number
  minPercent?: number
  maxPercent?: number
  className?: string
  style?: Styles
}

export type ProgressItemNativeRef = View
export type ProgressItemWebRef = HTMLDivElement
