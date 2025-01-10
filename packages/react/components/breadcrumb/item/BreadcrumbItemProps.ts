import { TouchableOpacity } from 'react-native'
import { Accessibility, Clickable, Dev, Link } from '../../../objects'
import { CommonProps } from '../../../objects/facets/CommonProps'

export interface BreadcrumbItemProps extends Accessibility, Clickable, Dev {
  children?: string
  active?: boolean
  to?: string
}

/**
 * Breadcrumb Item Interface
 */
export interface BreadcrumbItemPropsWeb extends Accessibility, Clickable, Link, BreadcrumbItemProps, Dev, CommonProps {
  routerLink?: React.ElementType
}

export type BreadcrumbItemRef = HTMLLIElement
export type BreadcrumbItemNativeRef = TouchableOpacity
