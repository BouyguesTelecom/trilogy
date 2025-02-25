import { type TouchableOpacity, type View } from 'react-native'
import { BackgroundProps } from '../../objects/atoms/Background'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'
import { TrilogyColor, TrilogyColorValues } from '../../objects/facets/Color'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '../../objects/facets/Dev'
import { Fullheight } from '../../objects/facets/Fullheight'

/**
 * Box Interface
 */
export interface BoxProps extends BackgroundProps, Clickable, Fullheight, Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  skeleton?: boolean
  href?: string
  highlighted?: TrilogyColor | TrilogyColorValues
  shadowless?: boolean
  backgroundSrc?: string
  headerOffset?: boolean
  flat?: boolean
  active?: boolean
  inverted?: boolean
}

export type BoxRef = HTMLDivElement
export type BoxNativeRef = View | TouchableOpacity
