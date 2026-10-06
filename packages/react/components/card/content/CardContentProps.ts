import { View } from 'react-native'
import { Accessibility } from '../../../objects/facets/Accessibility'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'

/**
 * Card Content Interface
 */
export interface CardContentProps extends Accessibility, CommonProps, Dev {
  children?: ReactNode
}

export type CardContentRef = HTMLDivElement
export type CardContentNativeRef = View
