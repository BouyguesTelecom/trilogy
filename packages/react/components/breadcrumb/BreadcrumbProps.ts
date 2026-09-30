import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility"
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
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
