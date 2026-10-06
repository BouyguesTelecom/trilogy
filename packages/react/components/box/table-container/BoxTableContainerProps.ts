import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'
import { ReactNode } from 'react'

/**
 * Box Table Container Interface
 */
export interface BoxTableContainerProps extends Accessibility, Dev {
  children?: string | ReactNode
  className?: string
}

export type BoxTableContainerRef = HTMLDivElement
export type BoxTableContainerNativeRef = View
