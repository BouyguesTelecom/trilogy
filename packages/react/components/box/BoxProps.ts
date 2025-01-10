import { TouchableOpacity, type View } from 'react-native'
import { Accessibility, Clickable, Fullheight, Dev, Link } from '../../objects'
import { BackgroundProps } from '../../objects/atoms/Background'
import { TrilogyColor, TrilogyColorValues } from '../../objects/facets/Color'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Box Interface
 */
export interface BoxProps extends BackgroundProps, Clickable, Link, Fullheight, Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  skeleton?: boolean
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
