import { TouchableOpacity, type View } from 'react-native'
import {
  Accessibility,
  Clickable,
  Fullheight,
  Dev,
  Loadable,
  BackgroundProps,
  TrilogyColor,
  TrilogyColorValues,
} from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Box Interface
 */
export interface BoxProps extends BackgroundProps, Clickable, Fullheight, Accessibility, Dev, CommonProps, Loadable {
  children?: React.ReactNode
  href?: string
  highlighted?: TrilogyColor | TrilogyColorValues
  shadowless?: boolean
  backgroundSrc?: string
  headerOffset?: boolean
  flat?: boolean
  active?: boolean
  inverted?: boolean
  blank?: boolean
}

export type BoxRef = HTMLDivElement
export type BoxNativeRef = View | TouchableOpacity
