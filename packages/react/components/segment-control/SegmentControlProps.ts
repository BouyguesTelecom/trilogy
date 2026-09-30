import type { View } from 'react-native'
import { AlignableProps } from "@/interfaces/Alignable"
import { Dev } from "@/interfaces/Dev"
import { Clickable } from "@/interfaces/Clickable"
import { CommonProps } from "@/interfaces/CommonProps"
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
