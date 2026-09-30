import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility"
import { Dev } from "@/interfaces/Dev"
import { StatusProps } from "@/interfaces/Status"
import { ReactNode } from 'react'

type Styles = { [key: string]: any }

/**
 * Progress Item Interface
 */
export interface ProgressItemProps extends StatusProps, Accessibility, Dev {
  children?: ReactNode
  percent: number
  minPercent?: number
  maxPercent?: number
  className?: string
  style?: Styles
}

export type ProgressItemNativeRef = View
export type ProgressItemWebRef = HTMLDivElement
