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
  disabled?: boolean
  fullwidth?: boolean
  className?: string
  marginless?: boolean
  align?: 'left' | 'right' | 'center'
  textAlign?: TypographyAlign | TypographyAlignValues
  markup?: TabsMarkup | TabsMarkupValues
}
