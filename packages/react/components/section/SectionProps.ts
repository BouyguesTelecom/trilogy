import type { View } from 'react-native'
import type { ChildrenWithNoText } from '@/objects/facets/ChildrenWithNoText'
import type { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { BackgroundColor, BackgroundColorValues } from '@/interfaces/colors'

type Styles = { [key: string]: any }

/**
 * Section Interface
 */
export interface SectionProps extends ChildrenWithNoText, CommonProps, Dev {
  skeleton?: boolean
  style?: Styles
  backgroundColor?: BackgroundColor | BackgroundColorValues
  backgroundSrc?: string
  inverted?: boolean
}

export type SectionRef = HTMLElement
export type SectionNativeRef = View
