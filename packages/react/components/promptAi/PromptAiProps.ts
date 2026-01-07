import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
}

export type PromptAiRef = HTMLDivElement
export type PromptAiNativeRef = View
