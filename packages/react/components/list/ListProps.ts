/**
 * ListItem Interface
 */
import { ReactNode } from 'react'
import { Accessibility, Dev } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'
import { View } from 'react-native'

export interface ListProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  divider?: boolean
  ordered?: boolean
}

export type ListRef = HTMLOListElement | HTMLUListElement
export type ListNativeRef = View
