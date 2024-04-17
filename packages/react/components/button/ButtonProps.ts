import {
  ButtonMarkup,
  ButtonMarkupValues,
  ButtonType,
  ButtonTypeValues,
  ButtonVariant,
  ButtonVariantValues,
} from './ButtonEnum'
import {Fullwidth} from '../../objects/facets/Fullwidth'
import {Accessibility, Clickable} from '../../objects/facets'
import {IconName, IconNameValues} from '..'

/**
 * Button Interface
 */
export interface ButtonProps
  extends Accessibility,
    Fullwidth,
    Clickable {
  children?: React.ReactNode
  disabled?: boolean
  markup?: ButtonMarkup | ButtonMarkupValues
  href?: string
  className?: string
  to?: string
  id?: string
  loading?: boolean
  name?: string

  routerLink?: React.ElementType
  // Valeur de la propriété "type" d'un <button/> ou <input/>
  type?: ButtonType | ButtonTypeValues
  iconName?: IconName | IconNameValues
  variant?: ButtonVariant | ButtonVariantValues
}
