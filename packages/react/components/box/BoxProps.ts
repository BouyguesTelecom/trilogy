import { TouchableOpacity, type View } from 'react-native'
import { Padding } from '@/objects/facets/Padding'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { Fullheight } from '@/objects/facets/Fullheight'
import { Radius } from '@/objects/facets/Radius'
import { ReactNode } from 'react'
import { BackgroundColor, BackgroundColorValues } from '@/interfaces/colors'

/**
 * Box Interface
 */
export interface BoxProps extends Clickable, Fullheight, Accessibility, Dev, CommonProps {
  children?: ReactNode
  skeleton?: boolean
  href?: string
  highlighted?: BackgroundColor | BackgroundColorValues
  shadowless?: boolean
  headerOffset?: boolean
  flat?: boolean
  active?: boolean
  inverted?: boolean
  blank?: boolean
  radius?: Radius | `${Radius}`
  padding?: Padding | `${Padding}`
  backgroundColor?: BackgroundColor | BackgroundColorValues
  backgroundSrc?: string
}

export type BoxRef = HTMLDivElement
export type BoxNativeRef = View | TouchableOpacity
