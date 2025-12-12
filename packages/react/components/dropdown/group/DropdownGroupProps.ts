import { View } from 'react-native'
import { Accessibility } from '../../../objects/facets/Accessibility'
import { CommonProps } from '../../../objects/facets/CommonProps'
import { Dev } from '../../../objects/facets/Dev'

/**
 * DropdownGroup Interface
 */
export interface DropdownGroupProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  title?: string
  hideSeparator?: boolean
}

export type DropdownGroupRef = HTMLDivElement
export type DropdownGroupNativeRef = View
