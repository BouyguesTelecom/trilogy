import type { View } from 'react-native'
import { type BackgroundProps } from '@/interfaces/Background'
import { type ChildrenWithNoText } from '@/interfaces/ChildrenWithNoText'
import { type Dev } from '@/interfaces/Dev'
import { CommonProps } from '@/interfaces/CommonProps'

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
