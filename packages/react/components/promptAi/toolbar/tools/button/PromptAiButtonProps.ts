import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { View } from 'react-native'

export interface PromptAiButtonProps extends Accessibility, Dev, CommonProps, Clickable {
  children?: React.ReactNode
  iconName?: IconName | IconNameValues
  disabled?: boolean
  active?: boolean
}

export type PromptAiButtonRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type PromptAiButtonNativeRef = View
