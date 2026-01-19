import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { ReactNode } from 'react'
import { ScrollView } from 'react-native'

export interface PromptAiFilesProps extends Accessibility, Dev, CommonProps {
  children?: ReactNode
}

export type PromptAiFilesRef = HTMLDivElement
export type PromptAiFilesNativeRef = ScrollView
