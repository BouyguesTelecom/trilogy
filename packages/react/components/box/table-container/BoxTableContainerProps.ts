import { Accessibility, Dev } from '@/objects/index'
import { View } from 'react-native'

/**
 * Box Table Container Interface
 */
export interface BoxTableContainerProps extends Accessibility, Dev {
  children?: string | React.ReactNode
  className?: string
}

export type BoxTableContainerRef = HTMLDivElement
export type BoxTableContainerNativeRef = View
