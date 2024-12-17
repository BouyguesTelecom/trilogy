import type { View } from 'react-native'
import { BackgroundProps, ChildrenWithNoText, Loadable } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Styles = { [key: string]: any }

/**
 * Section Interface
 */
export interface SectionProps extends BackgroundProps, ChildrenWithNoText, CommonProps, Loadable {
  style?: Styles
}

export type SectionRef = HTMLElement
export type SectionNativeRef = View
