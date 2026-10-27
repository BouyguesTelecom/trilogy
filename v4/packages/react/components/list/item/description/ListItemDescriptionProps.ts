/**
 * ListItem Interface
 */
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'
import { View } from 'react-native'

export interface ListItemDescriptionProps extends Dev {
  children?: ReactNode
  className?: string
}

export type ListItemDescriptionRef = HTMLElement
export type ListItemDescriptionNativeRef = View
