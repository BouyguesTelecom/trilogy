import type { TouchableOpacity } from 'react-native'
import { Clickable } from "@/interfaces/Clickable"
import { Dev } from "@/interfaces/Dev"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

/**
 * SegmentedControl Item Interface
 */
export interface SegmentControlItemProps extends Clickable, CommonProps, Dev {
  children: ReactNode
  active?: boolean
  disabled?: boolean
}

export type SegmentControlItemRef = HTMLButtonElement
export type SegmentControlItemNativeRef = TouchableOpacity
