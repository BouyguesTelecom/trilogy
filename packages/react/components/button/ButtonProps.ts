import {
  ButtonMarkup,
  ButtonMarkupValues,
  ButtonType,
  ButtonTypeValues,
  ButtonVariant,
  ButtonVariantValues,
} from './ButtonEnum'
import { Fullwidth } from '../../objects/facets/Fullwidth'
import { Accessibility, Clickable, Dev, Loadable } from '../../objects/facets'
import { IconName, IconNameValues } from '../../components/icon'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Button Interface
 */
export interface ButtonProps extends Accessibility, Fullwidth, Clickable, Dev, Loadable, CommonProps {
  children?: React.ReactNode
  disabled?: boolean
  markup?: ButtonMarkup | ButtonMarkupValues
  href?: string
  to?: string
  name?: string
  routerLink?: React.ElementType
  type?: ButtonType | ButtonTypeValues
  iconName?: IconName | IconNameValues
  variant?: ButtonVariant | ButtonVariantValues
}
