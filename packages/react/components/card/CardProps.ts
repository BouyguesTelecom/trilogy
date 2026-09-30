import { View } from 'react-native'
import { ClickEvent } from '@/interfaces/OnClickEvent'
import { Accessibility } from '@/interfaces/Accessibility'
import { Clickable } from '@/interfaces/Clickable'
import { CommonProps } from '@/interfaces/CommonProps'
import { Fullheight } from '@/interfaces/Fullheight'
import { Dev } from '@/interfaces/Dev'
import type { ReactNode } from 'react'

/**
 * Card Interface
 */

export interface CardProps extends Fullheight, Clickable, Accessibility, CommonProps, Dev {
  children?: ReactNode
  flat?: boolean
  horizontal?: boolean
  floating?: boolean
  skeleton?: boolean
  onClick?: ClickEvent
  reversed?: boolean
  href?: string
  active?: boolean
}

export type CardRef = HTMLDivElement | HTMLAnchorElement
export type CardNativeRef = View
