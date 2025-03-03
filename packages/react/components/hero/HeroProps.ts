import { BackgroundProps } from '@/objects/atoms/Background'
import { Clickable } from '@/objects/facets'
import { CommonProps } from '@/objects/facets/CommonProps'
import { BackgroundHeight } from './heroEnum'
import { View } from 'react-native'

/**
 * Hero Interface
 */
export interface HeroProps extends Clickable, BackgroundProps, CommonProps {
  children?: React.ReactNode
  overlap?: React.ReactNode[] | boolean
  backgroundHeight?: BackgroundHeight
}

export type HeroRef = HTMLElement
export type HeroNativeRef = View
