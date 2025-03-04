import type { View } from 'react-native'
import { Clickable } from '../../objects/facets/Clickable'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Alignable, AlignableValues } from '@/objects'

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
