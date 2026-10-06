import { View } from 'react-native'
import { Accessibility } from '../../objects/facets/Accessibility'
import { CommonProps } from '../../objects/facets/CommonProps'
import { Dev } from '../../objects/facets/Dev'
import { ReactNode } from 'react'

/**
 * Breadcrumb Interface
 */
export interface BreadcrumbProps extends Accessibility, Dev {
  children?: ReactNode
}

/**
 * Breadcrumb Web Interface
 */
export interface BreadcrumbWebProps extends BreadcrumbProps, CommonProps {}

export type BreadcrumbRef = HTMLElement
export type BreadcrumbNativeRef = View
