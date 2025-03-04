import { TouchableOpacity } from 'react-native'
import { Accessibility } from '../../../objects/facets/Accessibility'
import { Clickable } from '../../../objects/facets/Clickable'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '../../../objects/facets/Dev'

export interface BreadcrumbItemProps extends Accessibility, Clickable, Dev {
  children?: string
  active?: boolean
  to?: string
}

/**
 * Breadcrumb Item Interface
 */
export interface BreadcrumbItemPropsWeb extends Accessibility, Clickable, BreadcrumbItemProps, Dev, CommonProps {
  href?: string
  routerLink?: React.ElementType
}

export type BreadcrumbItemRef = HTMLLIElement
export type BreadcrumbItemNativeRef = TouchableOpacity
