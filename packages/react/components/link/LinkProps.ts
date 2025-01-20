import { AriaRole } from 'react'
import { Role } from 'react-native'
import { IconName, IconNameValues } from '../../components/icon'
import { Accessibility, Clickable, Dev } from '../../objects/facets'
import { CommonProps } from '../../objects/facets/CommonProps'

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
