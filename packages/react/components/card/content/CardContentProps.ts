import { View } from 'react-native'
import { Accessibility } from '../../../objects/facets/Accessibility'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

/**
 * Card Content Interface
 */
export interface CardContentProps extends Accessibility, CommonProps, Dev {
  children?: React.ReactNode
}

export type CardContentRef = HTMLDivElement
export type CardContentNativeRef = View
