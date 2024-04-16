import {Accessibility, Clickable} from '../../objects/facets'
import {TypographyAlign, TypographyAlignValues} from '../../objects/Typography/TypographyAlign'
import {IconName, IconNameValues} from '../icon'
import {TextLevels} from '../text'

/**
 * Link Interface
 */
export interface LinkProps extends Accessibility, Clickable {
  children?: React.ReactNode
  to?: string
  className?: string
  removeLinkClass?: boolean
  title?: string
  href?: string
  typo?: TypographyAlign | TypographyAlignValues | string
  routerLink?: React.ElementType
  iconName?: IconName | IconNameValues
  inline?: boolean
  level?: TextLevels
  inverted?: boolean
  plain?: boolean
  blank?: boolean
}
