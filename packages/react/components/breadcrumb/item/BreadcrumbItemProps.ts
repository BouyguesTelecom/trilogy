import { TouchableOpacity } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Clickable } from "@/interfaces/Clickable";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

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
