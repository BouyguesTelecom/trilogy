/**
 * ChipsList Interface
 */
import { ScrollView, type View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'

export interface ChipsListProps extends CommonProps, Dev {
  children?: React.ReactNode | React.ReactElement
  multiple?: boolean
  scrollable?: boolean
  accessibilityLabelledBy?: string
}

export type ChipsListRef = HTMLDivElement
export type ChipsListNativeRef = View | ScrollView
