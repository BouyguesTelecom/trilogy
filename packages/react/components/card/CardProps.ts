import { View } from 'react-native'
import { ClickEvent } from '../../events/OnClickEvent'
import { Accessibility, Clickable, Fullheight, Loadable } from '../../objects'
import { CommonProps } from '@/objects/facets/CommonProps'

/**
 * Card Interface
 */

export interface CardProps extends Fullheight, Clickable, Accessibility, Loadable, CommonProps {
  children?: React.ReactNode
  flat?: boolean
  horizontal?: boolean
  floating?: boolean
  onClick?: ClickEvent
  reversed?: boolean
  href?: string
  active?: boolean
}

export type CardRef = HTMLDivElement | HTMLAnchorElement
export type CardNativeRef = View
