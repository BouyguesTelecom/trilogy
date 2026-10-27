import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { BackgroundHeight } from '@/components/hero/heroEnum'
import { View } from 'react-native'
import { ReactNode } from 'react'
import { BackgroundColor, BackgroundColorValues } from '@/interfaces/colors'

/**
 * Hero Interface
 */
export interface HeroProps extends Clickable, CommonProps, Dev {
  children?: ReactNode
  overlap?: ReactNode[] | boolean
  backgroundHeight?: BackgroundHeight
  backgroundColor?: BackgroundColor | BackgroundColorValues
  backgroundSrc?: string
  inverted?: boolean
}

export type HeroRef = HTMLElement
export type HeroNativeRef = View
