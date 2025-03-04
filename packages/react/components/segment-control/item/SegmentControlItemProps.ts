import type { TouchableOpacity } from 'react-native'
import { Clickable } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

/**
 * SegmentedControl Item Interface
 */
export interface SegmentControlItemProps extends Clickable, CommonProps {
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
}

export type SegmentControlItemRef = HTMLButtonElement
export type SegmentControlItemNativeRef = TouchableOpacity
