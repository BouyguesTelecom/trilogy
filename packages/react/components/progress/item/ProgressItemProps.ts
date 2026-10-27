import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'
import { StatusProps } from '@/objects/facets/Status'
import { View } from 'react-native'
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
