import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiSelectProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
}

export type PromptAiSelectRef = HTMLSelectElement | HTMLInputElement
export type PromptAiSelectNativeRef = View
