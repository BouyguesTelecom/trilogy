import { View } from 'react-native'
import { Accessibility } from '../../../objects/facets/Accessibility'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '../../../objects/facets/Dev'
import { ReactNode } from 'react'

/**
 * DropdownGroup Interface
 */
export interface DropdownGroupProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  hideSeparator?: boolean
}

export type DropdownGroupRef = HTMLDivElement
export type DropdownGroupNativeRef = View
