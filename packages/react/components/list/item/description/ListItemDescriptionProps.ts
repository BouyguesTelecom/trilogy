/**
 * ListItem Interface
 */
import { ReactNode } from 'react'
import { View } from 'react-native'

export interface ListItemDescriptionProps {
  children?: ReactNode
  className?: string
}

export type ListItemDescriptionRef = HTMLElement
export type ListItemDescriptionNativeRef = View
