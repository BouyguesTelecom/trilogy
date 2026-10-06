import { AlignableProps } from '@/objects/facets/Alignable'
import { Dev } from '@/objects/facets/Dev'
import type { View } from 'react-native'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { ReactNode } from 'react'

/**
 * SegmentedControl Interface
 */
export interface SegmentControlProps extends Clickable, CommonProps, Dev {
  children: ReactNode
  activeIndex?: number
  align?: AlignableProps['align']
}

export type SegmentControlRef = HTMLDivElement
export type SegmentControlNativeRef = View
