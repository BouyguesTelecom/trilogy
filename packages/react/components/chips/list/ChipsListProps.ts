/**
 * ChipsList Interface
 */
import { type ScrollView, type View } from 'react-native'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface ChipsListProps extends CommonProps {
  children?: React.ReactNode | React.ReactElement
  multiple?: boolean
  scrollable?: boolean
}

export type ChipsListRef = HTMLDivElement
export type ChipsListNativeRef = View | ScrollView
