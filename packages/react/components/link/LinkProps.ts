import { IconName, IconNameValues } from '@/components/icon'
import { TextLevels } from '@/components/text/TextEnum'
import { Accessibility } from '@/objects/facets/Accessibility'
import { Clickable } from '@/objects/facets/Clickable'
import { Dev } from '@/objects/facets/Dev'
import { TypographyAlign, TypographyAlignValues } from '@/objects/Typography/TypographyAlign'
import { Styles } from '@/types'

/**
 * Link Interface
 */
export interface LinkProps extends Accessibility, Clickable, Dev {
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
  blank?: boolean
  style?: Styles
}
