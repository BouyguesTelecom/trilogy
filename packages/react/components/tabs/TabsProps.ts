import { Accessibility } from '@/objects/facets/Accessibility'
import { AlignableProps } from '@/objects/facets/Alignable'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

/**
 * Tabs Interface
 */
export interface TabsProps extends AlignableProps, Clickable, Accessibility, Dev, CommonProps {
  children: React.ReactNode | string
  activeIndex?: number
  fullwidth?: boolean
  inverted?: boolean
}

export type TabsRef = HTMLDivElement
export type TabsNativeRef = View
