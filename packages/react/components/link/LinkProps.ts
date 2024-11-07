import { IconName, IconNameValues } from '@/components/icon'
import { TextLevels } from '@/components/text'
import { Accessibility, Clickable, Dev } from '@/objects/facets'
import { TypographyAlign, TypographyAlignValues } from '@/objects/Typography/TypographyAlign'
import { Styles } from '@/types'

/**
 * Link Interface
 */
export interface LinkProps extends Accessibility, Clickable, Dev {
  children?: React.ReactNode
  to?: string
  className?: string
  href?: string
  routerLink?: React.ElementType
  iconName?: IconName | IconNameValues
  inline?: boolean
  inverted?: boolean
  blank?: boolean
}
