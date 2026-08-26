import { ReactNode } from 'react'
import { View } from 'react-native'
import { Dev } from "@/interfaces/Dev";

export interface ListItemDescriptionProps extends Dev {
  children?: ReactNode
  className?: string
}

export type ListItemDescriptionRef = HTMLElement
export type ListItemDescriptionNativeRef = View
