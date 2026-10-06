import type { View } from 'react-native'
import type { BackgroundProps } from '@/objects/atoms/Background'
import type { ChildrenWithNoText } from '@/objects/facets/ChildrenWithNoText'
import type { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'

type Styles = { [key: string]: any }

/**
 * Section Interface
 */
export interface SectionProps extends BackgroundProps, ChildrenWithNoText, CommonProps, Dev {
  skeleton?: boolean
  style?: Styles
}

export type SectionRef = HTMLElement
export type SectionNativeRef = View
