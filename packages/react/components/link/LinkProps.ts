import { Accessibility, Clickable, Dev } from '../../objects/facets'
import { CommonProps } from '../../objects/facets/CommonProps'

/**
 * Link Interface
 */
export interface LinkProps extends Accessibility, Clickable, Dev, CommonProps {
  children?: React.ReactNode
  to?: string
  href?: string
  markup?: React.ElementType
  inverted?: boolean
  blank?: boolean
  title?: string
}
