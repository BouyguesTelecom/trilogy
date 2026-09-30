import { BackgroundHeight } from '@/components/hero/heroEnum'
import { View } from 'react-native'
import { BackgroundProps } from "@/interfaces/Background"
import { Clickable } from "@/interfaces/Clickable"
import { Dev } from "@/interfaces/Dev"
import { CommonProps } from "@/interfaces/CommonProps"
import { ReactNode } from 'react'

/**
 * Hero Interface
 */
export interface HeroProps extends Clickable, BackgroundProps, CommonProps, Dev {
  children?: ReactNode
  overlap?: ReactNode[] | boolean
  backgroundHeight?: BackgroundHeight
}

export type HeroRef = HTMLElement
export type HeroNativeRef = View
