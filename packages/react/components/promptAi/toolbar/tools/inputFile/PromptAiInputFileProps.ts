import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiInputFileProps extends Accessibility, Dev, CommonProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export type PromptAiInputFileRef = HTMLButtonElement
export type PromptAiInputFileNativeRef = View
