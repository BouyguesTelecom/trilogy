/**
 * ChipsList Interface
 */
import { ScrollView, type View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface ChipsListProps extends CommonProps {
  children?: React.ReactNode
  multiple?: boolean
  scrollable?: boolean
  accessibilityLabelledBy?: string
}

export type ChipsListRef = HTMLDivElement
export type ChipsListNativeRef = View | ScrollView
