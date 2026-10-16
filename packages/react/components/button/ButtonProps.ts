import { TouchableOpacity } from 'react-native'
import { IconName, IconNameValues } from '@/components/icon'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { CommonProps } from '@/objects/facets/CommonProps'
import { Dev } from '@/objects/facets/Dev'
import { Fullwidth } from '@/objects/facets/Fullwidth'
import { ButtonMarkup, ButtonMarkupValues, ButtonType, ButtonTypeValues } from '@/components/button/ButtonEnum'
import { ElementType, ReactNode } from 'react'
import { ButtonVariant, ButtonVariantValues } from '@/interfaces/button'

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
