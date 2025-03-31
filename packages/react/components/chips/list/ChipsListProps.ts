/**
 * ChipsList Interface
 */
import { CommonProps } from '@/objects/facets/CommonProps'
import { ScrollView, View } from 'react-native'

export interface ChipsListProps extends CommonProps {
  children?: React.ReactNode | React.ReactElement
  multiple?: boolean
  scrollable?: boolean
}

export type ChipsListRef = HTMLDivElement
export type ChipsListNativeRef = View | ScrollView
