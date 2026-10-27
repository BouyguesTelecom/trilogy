import { View } from 'react-native'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'
import { BackgroundColor, BackgroundColorValues } from '@/interfaces/colors'

/**
 * Box Content Interface
 */
export interface BoxContentProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  backgroundColor?: BackgroundColor | BackgroundColorValues
  backgroundSrc?: string
}

export type BoxContentRef = HTMLDivElement
export type BoxContentNativeRef = View
