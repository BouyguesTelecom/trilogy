import { Invertable } from '../../objects/facets/Invertable'
import { Accessibility } from '../../objects'

/**
 * Options Interface
 */
export interface OptionsProps extends Invertable, Accessibility {
  children?: React.ReactNode
  className?: string
}
