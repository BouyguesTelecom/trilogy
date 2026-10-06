import { TouchableOpacity, type View } from 'react-native'
import { Padding } from '@/objects/facets/Padding'
import { BackgroundProps } from '../../objects/atoms/Background'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'
import { TrilogyColor, TrilogyColorValues } from '../../objects/facets/Color'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '../../objects/facets/Dev'
import { Fullheight } from '../../objects/facets/Fullheight'
import { Radius } from '@/objects/facets/Radius'
import { ReactNode } from 'react'

/**
 * Box Interface
 */
export interface BoxProps extends BackgroundProps, Clickable, Fullheight, Accessibility, Dev, CommonProps {
  children?: ReactNode
  skeleton?: boolean
  href?: string
  highlighted?: TrilogyColor | TrilogyColorValues
  shadowless?: boolean
  backgroundSrc?: string
  headerOffset?: boolean
  flat?: boolean
  active?: boolean
  inverted?: boolean
  blank?: boolean
  radius?: Radius | `${Radius}`
  padding?: Padding | `${Padding}`
}

export type BoxRef = HTMLDivElement
export type BoxNativeRef = View | TouchableOpacity
