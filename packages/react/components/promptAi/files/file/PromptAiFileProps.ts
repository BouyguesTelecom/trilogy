import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiFileProps extends Accessibility, Dev, CommonProps {
  type?: 'image' | string
  name: string
  src: string | number
  onDelete?: ClickEvent
}

export type PromptAiFileRef = HTMLDivElement
export type PromptAiFileNativeRef = View
