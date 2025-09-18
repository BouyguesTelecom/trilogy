import { AriaRole } from 'react'
import { Role, type Text } from 'react-native'
import { IconName, IconNameValues } from '../../components/icon'
import { Accessibility, Clickable, Dev, Link as LinkFacet } from '../../objects/facets'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Link Interface
 */

interface Link extends Accessibility, Clickable, LinkFacet, Dev, CommonProps {
  children?: React.ReactNode
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
