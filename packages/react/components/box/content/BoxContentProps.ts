import { View } from 'react-native'
import { BackgroundProps } from '@/objects/atoms/Background'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

/**
 * Box Content Interface
 */
export interface BoxContentProps extends BackgroundProps, Accessibility, Dev, CommonProps {
  children?: ReactNode
}

export type BoxContentRef = HTMLDivElement
export type BoxContentNativeRef = View
