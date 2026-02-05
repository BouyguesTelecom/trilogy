import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptInputFileProps extends Accessibility, Dev, CommonProps {
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  readOnly?: boolean
}
export type PromptInputFileRef = HTMLButtonElement
export type PromptInputFileNativeRef = View
