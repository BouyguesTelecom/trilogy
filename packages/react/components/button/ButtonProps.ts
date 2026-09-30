import { TouchableOpacity } from 'react-native'
import { IconName, IconNameValues } from '@/components/icon'
import {
  ButtonMarkup,
  ButtonMarkupValues,
  ButtonType,
  ButtonTypeValues,
  ButtonVariant,
  ButtonVariantValues,
} from '@/components/button/ButtonEnum'
import { Accessibility } from "@/interfaces/Accessibility"
import { Clickable } from "@/interfaces/Clickable"
import { CommonProps } from "@/interfaces/CommonProps"
import { Dev } from "@/interfaces/Dev"
import { Fullwidth } from "@/interfaces/Fullwidth"
import { ElementType, ReactNode } from 'react'

/**
 * Button Interface
 */
export interface ButtonProps extends Accessibility, Fullwidth, Clickable, Dev, CommonProps {
  children?: ReactNode
  disabled?: boolean
  markup?: ButtonMarkup | ButtonMarkupValues
  href?: string
  to?: string
  loading?: boolean
  name?: string
  routerLink?: ElementType
  type?: ButtonType | ButtonTypeValues
  iconName?: IconName | IconNameValues
  variant?: ButtonVariant | ButtonVariantValues
}

export type ButtonRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type ButtonNativeRef = TouchableOpacity
