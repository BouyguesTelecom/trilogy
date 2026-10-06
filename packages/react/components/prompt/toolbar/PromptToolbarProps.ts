import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'
import { ReactNode } from 'react'

export interface PromptToolbarProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
}

export type PromptToolbarRef = HTMLDivElement
export type PromptToolbarNativeRef = View
