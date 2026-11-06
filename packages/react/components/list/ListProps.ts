/**
 * ListItem Interface
 */
import { ReactNode } from 'react'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Dev } from '@/objects/facets/Dev'
import { CommonProps } from '@/objects/facets/CommonProps'
import { View } from 'react-native'
import { Spacing } from '@/objects/facets/Spacing'

export interface ListProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
  divider?: boolean
  ordered?: boolean
  gap?: Spacing | `${Spacing}`
}

export type ListRef = HTMLOListElement | HTMLUListElement
export type ListNativeRef = View
