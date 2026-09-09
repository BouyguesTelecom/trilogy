import type { View } from 'react-native'
import type { BackgroundProps, ChildrenWithNoText, Dev } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

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
