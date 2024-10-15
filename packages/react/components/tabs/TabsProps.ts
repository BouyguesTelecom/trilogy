import { Centerable } from '@/objects/facets/Centerable'
import { JustifiableProps } from '@/objects/facets/Justifiable'
import { Accessibility, Clickable, TypographyAlign, TypographyAlignValues } from '@/objects'

export enum TabsMarkup {
  DIV = 'div',
  MENU = 'menu',
}

export type TabsMarkupValues = `${TabsMarkup}`

/**
 * Tabs Interface
 */
export interface TabsProps extends Centerable, JustifiableProps, Clickable, Accessibility {
  children: React.ReactNode | string
  activeIndex?: number
  fullwidth?: boolean
  className?: string
  marginless?: boolean
  inverted?: boolean
  align?: 'left' | 'right' | 'center'
  shadowless?: boolean
  textAlign?: TypographyAlign | TypographyAlignValues
  markup?: TabsMarkup | TabsMarkupValues
}
