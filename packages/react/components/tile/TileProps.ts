import { Accessibility, Clickable } from '../../objects'
import { TileMarkup, TileMarkupValues } from './TileEnum'

/**
 * Tile Interface
 */
export interface TileProps extends Clickable, Accessibility {
  children: React.ReactNode
  child?: boolean
  parent?: boolean
  ancestor?: boolean
  vertical?: boolean
  markup?: TileMarkup | TileMarkupValues
  to?: string
  className?: string
  routerLink?: React.ElementType
}
