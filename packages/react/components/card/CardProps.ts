import { View } from 'react-native'
import { ClickEvent } from '../../events/OnClickEvent'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Fullheight } from '../../objects/facets/Fullheight'

/**
 * Card Interface
 */

export interface CardProps extends Fullheight, Clickable, Accessibility, CommonProps {
  children?: React.ReactNode
  flat?: boolean
  horizontal?: boolean
  floating?: boolean
  skeleton?: boolean
  onClick?: ClickEvent
  reversed?: boolean
  href?: string
  active?: boolean
}

export type CardRef = HTMLDivElement | HTMLAnchorElement
export type CardNativeRef = View
