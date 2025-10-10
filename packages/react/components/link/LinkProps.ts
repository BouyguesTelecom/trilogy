import { AriaRole } from 'react'
import { Role, type Text } from 'react-native'
import { IconName, IconNameValues } from '../../components/icon/IconNameEnum'
import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '../../objects/facets/Dev'

/**
 * Link Interface
 */

interface Link extends Accessibility, Clickable, Dev, CommonProps {
  children?: React.ReactNode
  to?: string
  href?: string
  routerLink?: React.ElementType
  iconName?: IconName | IconNameValues
  inline?: boolean
  inverted?: boolean
  blank?: boolean
  title?: string
}

export interface LinkProps extends Link {
  role?: AriaRole
}

export interface LinkPropsNative extends Link {
  role?: Role
}

export type LinkRef = HTMLElement | HTMLAnchorElement
export type LinkNativeRef = Text
