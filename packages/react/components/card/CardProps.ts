import { View } from 'react-native'
import { Accessibility, Clickable, Fullheight, Link } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Card Interface
 */

export interface CardProps extends Fullheight, Clickable, Link, Accessibility, CommonProps {
  children?: React.ReactNode
  flat?: boolean
  horizontal?: boolean
  floating?: boolean
  skeleton?: boolean
  reversed?: boolean
  active?: boolean
}

export type CardRef = HTMLDivElement | HTMLAnchorElement
export type CardNativeRef = View
