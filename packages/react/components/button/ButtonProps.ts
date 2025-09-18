import { TouchableOpacity } from 'react-native'
import { IconName, IconNameValues } from '../../components/icon'
import { Accessibility, Clickable, Dev, Fullwidth, Link } from '../../objects'
import { CommonProps } from '../../objects/facets/CommonProps'

import {
  ButtonMarkup,
  ButtonMarkupValues,
  ButtonType,
  ButtonTypeValues,
  ButtonVariant,
  ButtonVariantValues,
} from './ButtonEnum'

/**
 * Button Interface
 */
export interface ButtonProps extends Accessibility, Fullwidth, Clickable, Link, Dev, CommonProps {
  children?: React.ReactNode
  disabled?: boolean
  markup?: ButtonMarkup | ButtonMarkupValues
  loading?: boolean
  name?: string
  routerLink?: React.ElementType
  type?: ButtonType | ButtonTypeValues
  iconName?: IconName | IconNameValues
  variant?: ButtonVariant | ButtonVariantValues
}

export type ButtonRef = HTMLAnchorElement | HTMLElement | HTMLInputElement | HTMLButtonElement
export type ButtonNativeRef = TouchableOpacity
