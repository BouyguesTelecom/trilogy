import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'
import { CommonProps } from '@/objects/facets/CommonProps'
import { ReactNode } from 'react'
import { BackgroundColor, BackgroundColorValues } from '@/interfaces/colors'

/**
 * Box Footer Interface
 */
export interface BoxFooterProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  backgroundColor?: BackgroundColor | BackgroundColorValues
}

export type BoxFooterRef = HTMLDivElement
export type BoxFooterNativeRef = View
