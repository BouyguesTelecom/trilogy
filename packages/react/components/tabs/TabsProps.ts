import { Accessibility } from '@/objects/facets/Accessibility'
import { AlignableProps } from '@/objects/facets/Alignable'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'
import { ReactNode } from 'react'

/**
 * Tabs Interface
 */
export interface TabsProps extends AlignableProps, Clickable, Accessibility, Dev, CommonProps {
  children: ReactNode | string
  activeIndex?: number
  fullwidth?: boolean
  inverted?: boolean
  small?: boolean
}

export type TabsRef = HTMLDivElement
export type TabsNativeRef = View
