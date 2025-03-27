import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { TouchableOpacity } from 'react-native'

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
