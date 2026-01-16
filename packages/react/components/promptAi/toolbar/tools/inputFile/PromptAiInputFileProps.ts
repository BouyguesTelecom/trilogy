import { ClickEvent } from '@/events/OnClickEvent'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiInputFileProps extends Accessibility, Dev, CommonProps {
  onClick?: ClickEvent
}
export type PromptAiInputFileRef = HTMLButtonElement
export type PromptAiInputFileNativeRef = View
