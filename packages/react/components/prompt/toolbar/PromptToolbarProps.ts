import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptToolbarProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
}

export type PromptToolbarRef = HTMLDivElement
export type PromptToolbarNativeRef = View
