import type { View } from 'react-native'
import { Clickable } from '../../objects/facets/Clickable'
import { CommonProps } from '../../objects/facets/CommonProps'
import { AlignableProps,  } from '@/objects'

/**
 * SegmentedControl Interface
 */
export interface SegmentControlProps extends Omit<AlignableProps, 'verticalAlign'>, Clickable, CommonProps {
  children: React.ReactNode
  activeIndex?: number
}

export type SegmentControlRef = HTMLDivElement
export type SegmentControlNativeRef = View
