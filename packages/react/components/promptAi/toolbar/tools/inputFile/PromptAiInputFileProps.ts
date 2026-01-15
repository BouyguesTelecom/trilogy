import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { TouchableOpacity } from 'react-native'

export interface PromptAiInputFileProps extends Accessibility, Dev, CommonProps, Clickable {}
export type PromptAiInputFileRef = HTMLButtonElement
export type PromptAiInputFileNativeRef = TouchableOpacity
