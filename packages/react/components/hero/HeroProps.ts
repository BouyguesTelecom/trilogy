import { BackgroundProps } from '@/objects/atoms/Background'
import { Clickable, Dev } from '@/objects/facets'
import { CommonProps } from '@/objects/facets/CommonProps'
import { BackgroundHeight } from './heroEnum'
import { View } from 'react-native'
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
