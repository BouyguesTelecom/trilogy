import { ButtonVariant } from '@/components/button'
import { IconName, IconNameValues } from '@/components/icon'
import { View } from 'react-native'
import { Accessibility } from "@/interfaces/Accessibility";
import { Clickable } from "@/interfaces/Clickable";
import { CommonProps } from "@/interfaces/CommonProps";
import { Dev } from "@/interfaces/Dev";

export interface PromptButtonProps extends Accessibility, Dev, CommonProps, Clickable {
  children?: React.ReactNode
  iconName?: IconName | IconNameValues
  disabled?: boolean
  readOnly?: boolean
  active?: boolean
  rounded?: boolean
  variant?: ButtonVariant
}

export type PromptButtonRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type PromptButtonNativeRef = View
