import { Accessibility, StatusProps } from '@/objects/facets'
import { View } from 'react-native'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Styles = { [key: string]: any }

/**
 * Progress Item Interface
 */
export interface ProgressItemProps extends StatusProps, Accessibility {
  children?: React.ReactNode
  percent: number
  minPercent?: number
  maxPercent?: number
  className?: string
  style?: Styles
}

export type ProgressItemNativeRef = View
export type ProgressItemWebRef = HTMLDivElement
