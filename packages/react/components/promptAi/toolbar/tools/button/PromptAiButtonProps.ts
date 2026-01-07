import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from '@/objects/facets/Accessibility'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiButtonProps extends Accessibility, Dev, CommonProps {
  children?: React.ReactNode
  iconName?: IconName | IconNameValues
}

export type PromptAiButtonRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type PromptAiButtonNativeRef = View
