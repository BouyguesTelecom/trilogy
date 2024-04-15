import { Accessibility } from '../../objects/facets/Accessibility'
import { Clickable } from '../../objects/facets/Clickable'
import { TypographyAlign, TypographyAlignValues } from '../../objects/Typography/TypographyAlign'
import { IconName, IconNameValues } from '../icon/IconNameEnum'
import { TextLevels } from '../text'

/**
 * Link Interface
 */
export interface LinkProps extends Accessibility, Clickable {
  children?: React.ReactNode
  to?: string
  /**
   * @deprecated
   */
  fixed?: boolean
  tertiary?: boolean
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
