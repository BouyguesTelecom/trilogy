import { Alignable, AlignableValues } from '@/objects/index'
import type { View } from 'react-native'
import { Clickable } from '../../objects/facets/Clickable'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * SegmentedControl Interface
 */
export interface SegmentControlProps extends Clickable, CommonProps {
  children: React.ReactNode
  activeIndex?: number
  align?: Alignable | AlignableValues
}

export type SegmentControlRef = HTMLDivElement
export type SegmentControlNativeRef = View
