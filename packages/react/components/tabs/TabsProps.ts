import { Accessibility,  Clickable, Dev } from '@/objects'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'

/**
 * Tabs Interface
 */
export interface TabsProps extends Clickable, Accessibility, Dev, CommonProps {
  children: React.ReactNode | string
  activeIndex?: number
  fullwidth?: boolean
  inverted?: boolean
  small?: boolean
}

export type TabsRef = HTMLDivElement
export type TabsNativeRef = View
